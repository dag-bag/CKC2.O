const NameInput = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-5 rounded-2xl gap-3 ">
      <input
        placeholder="First Name"
        className="w-full md:w-auto lg:w-1/2 xl:w-1/3 border-2 px-4 py-3 md:py-4 rounded-xl font-heading"
      />
      <input
        placeholder="Last Name"
        className="w-full md:w-auto lg:w-1/2 xl:w-1/3 border-2 px-4 py-3 md:py-4 rounded-xl font-heading"
      />
    </div>
  );
};

export default NameInput;
