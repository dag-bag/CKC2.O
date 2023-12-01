import { fetchJson } from "@/hooks/use-session";
import { SessionData, sessionOptions } from "@/libs/iron";
import { getIronSession } from "iron-session";
// import { cookies } from "next/headers";

// async function getSession() {
//   const session = await getIronSession<SessionData>(cookies(), sessionOptions);
//   return session;
// }
export function withSession(
  fn: (session: SessionData, ...args: any[]) => Promise<any>
): (...args: any[]) => Promise<any> {
  if (typeof fn !== "function") {
    throw new Error("Invalid argument: fn must be a function");
  }

  return async (...args: any[]): Promise<any> => {
    try {
      const session: SessionData = await fetchJson("/auth/session");

      const {
        isLoggedIn,
        user: { id, username, email },
      } = session;

      if (!isLoggedIn || !id || !username || !email) {
        throw new Error("Invalid session object");
      }

      return fn(session, ...args);
    } catch (error) {
      console.error("An error occurred:", error);
      throw new Error(
        "An error occurred during session retrieval or function execution."
      );
    }
  };
}
