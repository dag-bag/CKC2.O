import joi from "joi";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "@/libs/iron";
import { sleep, SessionData } from "@/libs/iron";
import { updateUser } from "@/services/user";

// login
export async function POST(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const data = (await request.json()) as {
    id: number;
    username: string;
    email: string;
    coins: number;
  };
  session.isLoggedIn = true;
  session.user = data;
  await session.save();
  return Response.json(session);
}

// read session
export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (session.isLoggedIn !== true) {
    return Response.json(defaultSession);
  }

  return Response.json(session);
}

// logout
export async function DELETE() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  // /app-router-client-component-route-handler-swr/logout
  await session.destroy();

  return Response.json(defaultSession);
}

// Update session
export async function PUT(request: NextRequest) {
  try {
    const session = await getIronSession<SessionData>(
      cookies(),
      sessionOptions
    );
    if (!session.isLoggedIn) {
      throw new Error("Invalid session");
    }
    const data = (await request.json()) as {
      coins: number;
    };

    // Validate input data using joi
    const { error, value } = joi
      .object({
        coins: joi.number().required(),
      })
      .validate(data);

    if (error) {
      return Response.json({ error: error.details[0].message });
    }

    if (value.coins && session.user.coins >= value.coins) {
      session.user.coins -= value.coins;
    }

    await session.save();

    return Response.json({
      id: session.user.id,
      username: session.user.username,
      email: session.user.email,
      coins: session.user.coins,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "An error occurred" }, { status: 500 });
  }
}
