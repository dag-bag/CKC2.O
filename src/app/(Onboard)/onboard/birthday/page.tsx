"use client";
import useOnboard from "@/hooks/useOnboard";
const Page = () => {
  const { setter, storage } = useOnboard();
  return (
    <div
      style={{ backgroundSize: "800px 800px" }}
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center justify-center"
    >
      <input
        type="date"
        placeholder="Your Name"
        defaultValue={storage?.dob as string}
        onChange={(event) => setter("dob", event.target.value)}
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
      />
    </div>
  );
};

export default Page;
