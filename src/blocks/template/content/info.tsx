import { BsDot } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import SharePopup from "@/blocks/atoms/SharePopup";
import UnlockPopup from "@/blocks/popups/unlock-popup";
interface Props {
  id: number;
  slug: string;
  duration: string;
  title: string;
  type: string;
  price: number;
  shareableURL: string;
  isUnlocked: boolean;
}

const InfoBlock = ({
  slug,
  duration,
  //   reward,
  title,
  type,
  price,
  shareableURL,
  isUnlocked,
  id,
}: Props) => {
  return (
    <div className="bg-white p-5 rounded-2xl font-heading">
      <h1 className="text-3xl font-semibold pl-2">
        {price} <span className="text-sm">CRD</span>
      </h1>
      <section className="mt-5 space-y-1">
        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiTime size={18} /> Duration <BsDot />
          </p>
          <p>{duration}</p>
        </div>

        {/* {reward && (
          <div className="flex gap-2 font-100">
            <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
              <BiTrophy size={18} /> Rewards <BsDot />
            </p>
            <p className="leading-5">{reward}</p>
          </div>
        )} */}
      </section>

      <section className="flex gap-2 flex-col mt-5">
        <UnlockPopup coins={price} title={title} type={type} contentId={id} />
        <SharePopup shareableURL={shareableURL} title={title} />
      </section>
    </div>
  );
};

export default InfoBlock;
