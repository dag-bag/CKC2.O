import useSession from "./use-session";
import { getUser } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

export default function useGoogle() {
  const { login } = useSession();
  const router = useRouter();
  const P = useSearchParams();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["google"],
    queryFn: () => getUser(P.get("access_token") as string),
  });
  if (isSuccess) {
    if (data?.user?.setup === false || data?.user?.setup === null) {
      login(
        {
          id: data?.user.id,
          email: data?.user.email,
          username: data?.user.username,
          coins: data?.user.coins,
          premium: data?.user.premium,
          jwt: data?.jwt,
          type: data?.user.type,
          setup: data.user.setup,
        } as any,
        {
          optimisticData: {
            isLoggedIn: true,
            user: {
              id: data?.user.id,
              email: data?.user.email,
              username: data?.user.username,
              coins: data?.user.coins,
              premium: data?.user.premium,
              jwt: data?.jwt,
              type: data?.user.type,
              setup: data.user.setup,
            },
          },
        }
      );
      router.push("/newboard/name");
    } else {
      login(
        {
          id: data?.user.id,
          email: data?.user.email,
          username: data?.user.username,
          coins: data?.user.coins,
          premium: data?.user.premium,
          jwt: data?.jwt,
          setup: data?.user.setup,
        } as any,
        {
          optimisticData: {
            isLoggedIn: true,
            user: {
              id: data?.user.id,
              email: data?.user.email,
              username: data?.user.username,
              coins: data?.user.coins,
              premium: data?.user.premium,
              jwt: data?.jwt,
              setup: data?.user.setup,
            },
          },
        }
      );
      router.push("/dashboard");
    }
    console.log(data);
  }

  return {
    isLoading,
    data,
  };
}
