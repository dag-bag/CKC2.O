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
    avatar: string;
    premium: number | null; // Assuming premium is a timestamp or null
  };
  session.isLoggedIn = true;
  session.user = data;
  await session.save();
  return Response.json(session);
}

// read session
export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    return Response.json(defaultSession);
  }

  const currentTime = Math.floor(Date.now() / 1000);
  const premiumStatus =
    session.user.premium === null
      ? "inactive"
      : session.user.premium > currentTime
      ? "active"
      : "expired";

  return Response.json({
    ...session,
    user: {
      ...session.user,
      premiumStatus,
    },
  });
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
      type: "add" | "remove";
    };

    // Validate input data using joi
    const { error, value } = joi
      .object({
        coins: joi.number().required(),
        type: joi.string().valid("add", "remove").required(),
      })
      .validate(data);

    if (error) {
      return Response.json({ error: error.details[0].message });
    }

    switch (value.type) {
      case "add":
        // @ts-ignore
        session.user.coins = parseInt(session.user.coins, 10) + value.coins;
        break;
      case "remove":
        if (session.user.coins >= value.coins) {
          session.user.coins -= value.coins;
        } else {
          return Response.json(
            { error: "Not enough coins to remove" },
            { status: 400 }
          );
        }
        break;
      default:
        return Response.json(
          { error: "Invalid operation type" },
          { status: 400 }
        );
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
