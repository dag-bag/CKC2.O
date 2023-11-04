import BuyPopup from "@/blocks/atoms/BuyPopup";
const Player = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/sun.jpg")' }}
      className=" h-[500px] rounded-xl bg-cover bg-no-repeat bg-center flex items-end justify-end p-10"
    >
      <BuyPopup />
    </div>
  );
};

export default Player;
