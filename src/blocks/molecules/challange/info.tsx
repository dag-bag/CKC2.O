import { BsDot } from "react-icons/bs";
import { BiGlobe, BiTime } from "react-icons/bi";
import BuyPopup from "@/blocks/atoms/BuyPopup";
import SharePopup from "@/blocks/atoms/SharePopup";
const Info = ({
  id,
  price,
  title,
  grade,
  credits,
  duration,
  difficulty,
  description,
  winnerAnnouncement,
  isAlreadyPurchased,
}: any) => (
  <div className="p-5 bg-white rounded-xl border border-gray-200">
    <div>
      <h1 className="text-2xl font-heading font-semibold">{title}</h1>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <section className="mt-5 space-y-1">
      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Grade <BsDot />
        </p>
        <p>{grade}</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Credits <BsDot />
        </p>
        <p>{credits} CRDs</p>
      </div>
      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Difficulty Level <BsDot />
        </p>
        <p className="capitalize">{difficulty}</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiTime size={18} /> Duration <BsDot />
        </p>
        <p>{duration}</p>
      </div>

      <div className="flex gap-2 font-100 items-center">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiTime size={18} /> Winner <br /> Announ <BsDot />
        </p>
        <p>{winnerAnnouncement}</p>
      </div>

      <div className="grid gap-2 pt-2">
        {!isAlreadyPurchased && (
          <BuyPopup
            price={price}
            title={title}
            type="challange"
            id={parseInt(id)}
          />
        )}
        <SharePopup shareableURL="hope its good" title={title} />
      </div>
    </section>
  </div>
);

export default Info;
