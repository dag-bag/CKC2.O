import useAuth from "@/hooks/useAuth";
import { getUser } from "@/services/user";

const Page = async ({ searchParams }: any) => {
  const { user } = await getUser(searchParams.access_token);
  console.log(user);
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center  justify-center gap-5"
      style={{ backgroundSize: "800px 800px" }}
    >
      <input
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
        placeholder="First Name"
      />
      {JSON.stringify(user)}
      <input
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
        placeholder="Last Name"
      />
    </div>
  );
};

export default Page;
