"use client";
import useOnboard from "@/hooks/useOnboard";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import useSession from "@/hooks/use-session";
import { getUser } from "@/services/user";
const Page = () => {
  const P = useSearchParams();
  const { setter, storage } = useOnboard();
  const { login } = useSession();
  const access_token = P.get("access_token");
  useSWR(access_token ? "/auth/session" : null, () =>
    fn(access_token as any, login)
  );
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center justify-center gap-5"
      style={{ backgroundSize: "800px 800px" }}
    >
      <input
        placeholder="First Name"
        defaultValue={storage?.firstname as string}
        onChange={(event) => setter("firstname", event.target.value)}
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
      />
      <input
        placeholder="Last Name"
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
        defaultValue={storage?.lastname as string}
        onChange={(event) => {
          setter("lastname", event.target.value);
        }}
      />
    </div>
  );
};

export default Page;
const fn = async (access_token: string, login: any) => {
  const data = await getUser(access_token);
  login(
    {
      id: data?.user.id,
      email: data?.user.email,
      username: data?.user.username,
      jwt: data?.jwt,
    } as any,
    {
      optimisticData: {
        isLoggedIn: true,
        user: {
          id: data?.user.id,
          email: data?.user.email,
          username: data?.user.username,
          jwt: data?.jwt,
        },
      },
    }
  );
};
