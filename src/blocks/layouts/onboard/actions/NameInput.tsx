const NameInput = () => {
  return (
    <div className="md:h-auto min-h-[100px] flex items-center rounded-2xl gap-3 flex-wrap">
      <input
        placeholder="First Name"
        className="border-2 px-10 py-4 rounded-xl font-heading"
      />
      <input
        placeholder="Last Name"
        className="border-2 px-10 py-4 rounded-xl font-heading"
      />
    </div>
  );
};

export default NameInput;
