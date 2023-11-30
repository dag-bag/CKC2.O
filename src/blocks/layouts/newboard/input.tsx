const Input = ({ placeholder }: any) => {
  return (
    <div className="md:h-[60px] h-[50px] inline-flex items-center px-10 border-b-2 border-blue-500 bg-blue-50">
      <input
        type="text"
        placeholder={placeholder}
        className="border-none outline-none bg-transparent md:placeholder:text-lg"
      />
    </div>
  );
};

export default Input;
