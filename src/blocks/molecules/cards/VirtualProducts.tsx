interface Props {
  id: number;
  title: string;
  image: string;
  coins: number;
  purchased: boolean;
  type: "banner" | "avatar";
}
import UnlockPopup from "@/blocks/popups/unlock-virtual-popup";

import Image from "next/image";
const VirtualProduct: React.FC<Props> = ({
  title,
  id,
  image,
  coins,
  type,
  purchased,
}) => {
  return (
    <div className=" flex-col flex gap-2 bg-white">
      <div className="w-[250px] center h-[250px] rounded-xl">
        <Image
          className="overflow-hidden"
          src={image}
          alt="profile"
          width={200}
          height={200}
        />
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
        <h4 className="font-amar text-lg break-words">{title}</h4>
        <div className="flex items-center gap-2 font-heading font-semibold  border-l pl-5 border-gray-200  ">
          {coins}
          <Image src={"/assets/coins.png"} alt="coins" width={18} height={18} />
        </div>
      </div>

      {purchased && (
        <div className="center py-3 bg-darkgreen text-white font-heading">
          ✅ Claimed
        </div>
      )}

      {!purchased && (
        <UnlockPopup
          image={image}
          type={type}
          coins={coins}
          title={title}
          contentId={id}
        />
      )}
    </div>
  );
};

export default VirtualProduct;
