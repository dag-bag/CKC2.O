import useSWR from "swr";
import { SessionData, defaultSession } from "@/libs/iron";
import useSWRMutation from "swr/mutation";

const sessionApiRoute = "/auth/session";

export async function fetchJson<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  return fetch(input, {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    ...init,
  }).then((res) => res.json());
}

function doLogin(url: string, data: { arg: string }) {
  return fetchJson<SessionData>(url, {
    method: "POST",
    body: JSON.stringify(data.arg),
  });
}
function doUpdate(url: string, data: { arg: string }) {
  return fetchJson<SessionData>(url, {
    method: "PUT",
    body: JSON.stringify(data.arg),
  });
}

function doLogout(url: string) {
  return fetchJson<SessionData>(url, {
    method: "DELETE",
  });
}

export default function useSession() {
  const { data: session, isLoading } = useSWR(
    sessionApiRoute,
    fetchJson<SessionData>,
    {
      fallbackData: defaultSession,
    }
  );

  const { trigger: login } = useSWRMutation(sessionApiRoute, doLogin, {
    // the login route already provides the updated information, no need to revalidate
    revalidate: false,
  });
  const { trigger: update } = useSWRMutation(sessionApiRoute, doUpdate, {
    revalidate: true,
  });
  const { trigger: logout } = useSWRMutation(sessionApiRoute, doLogout);

  return { session, logout, login, isLoading, update };
}


// what is your account type 

export const useAccountType = (): "free" | "premium" | "basic" => {
  const session = useSession()
  return session.session.user.type as any ?? "free";
}