"use client";
import useOnboard from "@/hooks/useOnboard";
const Page = () => {
  const { setter, storage } = useOnboard();
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex  items-center mdflex-col justify-center gap-5"
      style={{ backgroundSize: "800px 800px" }}
    >
      <input
        placeholder="Country"
        defaultValue={storage?.country as string}
        onChange={(event) => setter("country", event.target.value)}
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
      />
      <input
        placeholder="State"
        defaultValue={storage?.state as string}
        onChange={(event) => setter("state", event.target.value)}
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
      />
      <input
        placeholder="City"
        defaultValue={storage?.city as string}
        onChange={(event) => setter("city", event.target.value)}
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
      />
    </div>
  );
};

export default Page;
