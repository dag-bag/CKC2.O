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
    <div className="grid bg-white">
      {type == "avatar" ? (
        <div className="aspect-w-4 aspect-h-4 relative">
          <Image className="overflow-hidden" src={image} alt="profile" fill />
        </div>
      ) : (
        <div className="aspect-w-10 aspect-h-4 relative">
          <Image className="overflow-hidden" src={image} alt="profile" fill />
        </div>
      )}
      <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
        <h4 className="font-amar text-lg break-words">{title}</h4>
        <div className="flex items-center gap-2 font-heading font-semibold  border-l pl-5 border-gray-200  ">
          {coins}
          <Image src={"/assets/coins.png"} alt="coins" width={18} height={18} />
        </div>
      </div>

      {!purchased && (
        <UnlockPopup
          image={image}
          type={type}
          coins={coins}
          title={title}
          contentId={id}
        />
      )}

      {purchased && (
        <div className="center py-3 mt-auto bg-darkgreen text-white font-heading">
          ✅ Claimed
        </div>
      )}
    </div>
  );
};

export default VirtualProduct;
