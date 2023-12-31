import { BsDot } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import Heading from "@/blocks/atoms/Heading";
import SharePopup from "@/blocks/popups/share-popup";
import UnlockPopup from "@/blocks/popups/unlock-popup";
import { convertSecondsToTime } from "@/libs/convertors";
interface Props {
  comic?: boolean;
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
  comic,
}: Props) => {
  if (comic) {
    return (
      <div className="flex bg-white p-5 rounded-2xl gap-5 ">
        <Heading size="medium" className="text-3xl font-semibold pl-2">
          {price} <span className="text-sm">Credits</span>
        </Heading>
        <div className="flex gap-5">
          <SharePopup shareableURL={shareableURL} title={title} />
          <UnlockPopup coins={price} title={title} type={type} contentId={id} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-2xl font-heading grid">
      <Heading size="medium" className="text-3xl font-semibold pl-2">
        {price} <span className="text-sm">Credits</span>
      </Heading>
      <section className="flex gap-2 flex-col mt-5">
        <SharePopup shareableURL={shareableURL} title={title} />
        <UnlockPopup coins={price} title={title} type={type} contentId={id} />
      </section>
    </div>
  );
};

export default InfoBlock;
