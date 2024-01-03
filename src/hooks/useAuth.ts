import toast from "react-hot-toast";
import { strapi } from "@/libs/strapi";
import useSession from "./use-session";
import { useRouter } from "next/navigation";
import { StrapiAuthenticationData } from "strapi-sdk-js";

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
    router.push(url);
    console.log("Redirecting to Google authentication...");
  };

  const loginWithCred = async (data: StrapiAuthenticationData): Promise<any> => {
    try {
      const { user, jwt } = await strapi.login(data);
      const {
        id, email, username, coins, premium, avatar, setup
      } = user
      const payload_data = {
        id,
        jwt,
        setup,
        coins,
        email,
        avatar,
        premium,
        username,
        premiumType: user.type,
      }

      setSession(payload_data as any, {
        optimisticData: {
          isLoggedIn: true,
          user: payload_data,
        },
      });
      console.log("Successfully logged in:", user);
      window.location.href = "/dashboard";
      return { user, jwt };
    } catch (error) {
      console.log("Error during login:", error);
      toast.error("Invalid credentials!");
      setTimeout(() => window.location.reload(), 2000);
    }
  };

  const login = (data: Action) => {
    if (data.type === "CRED") {
      console.log("Logging in with credentials...");
      loginWithCred({ identifier: data.identifier, password: data.password });
    } else {
      console.log("Logging in with Google...");
      loginWithGoogle();
    }
  };

  return { login };
}
