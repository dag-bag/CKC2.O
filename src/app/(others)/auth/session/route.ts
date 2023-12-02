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

// update session
export async function PUT(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const data = (await request.json()) as {
    id: number;
    username: string;
    email: string;
  };
  console.log(data);
  session.user = { ...session.user, ...data };
  console.log(session);
  await session.save();

  return Response.json(session);
}
