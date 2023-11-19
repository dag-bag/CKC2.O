"use client";
import useOnboard from "@/hooks/useOnboard";

const Page = () => {
  const { setter, storage } = useOnboard();
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundSize: "800px 800px" }}
    >
      <input
        type="number"
        placeholder="Your Phone"
        defaultValue={storage?.phone as string}
        onChange={(event) => setter("phone", event.target.value)}
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
      />
    </div>
  );
};

export default Page;
