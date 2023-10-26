const Page = () => {
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center md:flex-row flex-col justify-center gap-5"
      style={{ backgroundSize: "800px 800px" }}
    >
      <input
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
        placeholder="Country"
      />
      <input
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
        placeholder="State"
      />
      <input
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
        placeholder="City"
      />
    </div>
  );
};

export default Page;
