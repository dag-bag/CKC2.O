import { BsDot } from "react-icons/bs";
import BuyPopup from "@/blocks/atoms/BuyPopup";
import SharePopup from "@/blocks/atoms/SharePopup";
import { BiTime, BiGlobe, BiTrophy } from "react-icons/bi";

const VideoInfo = () => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h1 className="text-3xl font-semibold">
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

      <section className="flex gap-2 flex-col mt-5">
        <BuyPopup />
        <SharePopup />
      </section>
    </div>
  );
};

export default VideoInfo;
