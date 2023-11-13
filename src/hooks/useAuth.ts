import { strapi } from "@/libs/strapi";
import { useRouter } from "next/navigation";
import React from "react";

export default function useAuth() {
  const router = useRouter();
  const login = () => {
    const url = strapi.getProviderAuthenticationUrl("google");
    router.push(url);
  };

  return { login };
}
