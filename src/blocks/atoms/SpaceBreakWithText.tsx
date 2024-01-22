const AuthBreak = ({ text }: any) => {
  return (
    <div className="center pt-6 pb-4 font-heading">
      <div className="w-full h-[2px] bg-gray-200 flex-1 rounded-full"></div>
      <p className="text-center px-5 text-gray-500">{text}</p>
      <div className="w-full h-[2px] bg-gray-200 flex-1 rounded-full"></div>
    </div>
  );
};

export default AuthBreak;
