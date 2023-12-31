import { strapi } from "@/libs/strapi";
import { useRouter } from "next/navigation";
import { StrapiAuthenticationData } from "strapi-sdk-js";
import useSession from "./use-session";
interface GetAction {
  type: "GOOGLE";
}

interface GetOneAction {
  type: "CRED";
  identifier: string;
  password: string;
}
export type Action = GetAction | GetOneAction;
export default function useAuth() {
  const router = useRouter();
  const { login: setSession } = useSession();
  const loginWithGoogle = (): void => {
    const url = strapi.getProviderAuthenticationUrl("google");
    // const Fakeurl = `http://localhost:1337/api/connect/google`;
    router.push(url);
  };
  const loginWithCred = async (
    data: StrapiAuthenticationData
  ): Promise<any> => {
    try {
      const { user, jwt } = await strapi.login(data);
      setSession(
        {
          id: user.id,
          email: user.email,
          username: user.username,
          coins: user.coins,
          premium: user.premium,
          avatar: user.avatar,
          jwt,
          premiumType: user.type,
        } as any,
        {
          optimisticData: {
            isLoggedIn: true,
            user: {
              id: user.id,
              email: user.email,
              username: user.username,
              coins: user.coins,
              premium: user.premium,
              avatar: user.avatar,
              premiumType: user.type,
              jwt,
            },
          },
        }
      );
      window.location.href = "/dashboard";
      return { user, jwt };
    } catch (error) {
      alert("something went wrong");
    }
  };
  const login = (data: Action) => {
    data.type === "CRED"
      ? loginWithCred({ identifier: data.identifier, password: data.password })
      : loginWithGoogle();
  };

  return { login };
}
