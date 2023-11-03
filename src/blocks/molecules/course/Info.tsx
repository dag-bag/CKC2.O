import { BsDot } from "react-icons/bs";
import { MdSlideshow } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";
import { BiBook, BiTime } from "react-icons/bi";
import { BiShare, BiGlobe, BiTrophy } from "react-icons/bi";
const CourseInfo = () => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h1 className="text-3xl font-game font-semibold">
        400.99 <span className="text-sm">CRD</span>
      </h1>
      <section className="mt-5 space-y-1">
        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiTime size={18} /> Duration <BsDot />
          </p>
          <p>2h 24m</p>
        </div>
        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiGlobe size={18} /> Language <BsDot />
          </p>
          <p>English</p>
        </div>

        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <MdSlideshow size={18} /> Modules <BsDot />
          </p>
          <p>
            4 <span className="text-xs">(Activity + Quiz)</span>
          </p>
        </div>

        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiTrophy size={18} /> Rewards <BsDot />
          </p>
          <p className=" leading-5">
            100+ Stars and Badge <br />
            <span className="text-xs">
              (see reward section for more details)
            </span>
          </p>
        </div>
      </section>

      <section className="flex gap-2 mt-3">
        <button className=" mt-3 py-2.5 px-5 flex items-center justify-center text-white  bg-black border rounded-xl font-heading flex-1 gap-2">
          <BiLockAlt /> Unlock
        </button>
        <button className=" mt-3 py-2.5 px-5 flex items-center justify-center  border-gray-500 border rounded-xl font-heading flex-1 gap-2">
          <BiShare /> Share
        </button>
      </section>
    </div>
  );
};

export default CourseInfo;
