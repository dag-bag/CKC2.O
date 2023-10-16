import Grid from "@/blocks/temporary/Grid";

const Profile = () => {
  return (
    <div>
      <Grid />
    </div>
  );
};

export default Profile;

const Badge = () => {
  return (
    <div className="h-[300px] bg-gray-100 rounded-xl p-5">
      <div className="bg-[url('/red.png')] h-[150px] bg-cover bg-center rounded-xl"></div>
      <div className="mt-5">
        <h3 className="text-center text-xl font-medium">Galactic Star</h3>
        <p className="text-center text-sm">Lorem ipsum dolor sit amet.</p>

        <div className="mt-2">
          <div className="flex items-end justify-end">
            <p className=" text-sm text-gray-500 mb-1">50/100</p>
          </div>
          <div className="w-full  bg-white rounded-full">
            <div className="w-[50%] bg-indigo-500 rounded-full h-[8px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
