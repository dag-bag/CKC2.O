import { strapi } from "@/libs/strapi";
import { useRouter } from "next/navigation";
import React from "react";
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
  const loginWithGoogle = (): void => {
    const u = strapi.getProviderAuthenticationUrl("google");
    const url = `http://localhost:1337/api/connect/google`;
    router.push(url);
  };
  const loginWithCred = async (
    data: StrapiAuthenticationData
  ): Promise<any> => {
    try {
      const { user, jwt } = await strapi.login(data);
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
