import RootModal from "./popup-root";
import Image from "next/image";
import Button from "../atoms/Button";

interface Props {
  opened: boolean;
  onClose: () => void;
  coins: number;
}

const QuizRewardPopup: React.FC<Props> = ({ opened, onClose, coins }) => {
  return (
    <RootModal centered opened={opened} onClose={onClose}>
      <div>
        <h1 className="text-2xl font-amar text-center">
          <b>Congratulation 🎉</b>, <br /> you earned {coins} Coins
        </h1>
        <div className="center mt-5">
          <Image
            src={"/assets/credits.png"}
            alt="any"
            width={250}
            height={300}
          />
        </div>
        <div className="center mt-5">
          <Button onClick={onClose} animation="scale" className="!px-20">
            Thanks
          </Button>
        </div>
        {/* <p>Lorem ipsum sit amet.</p> */}
      </div>
    </RootModal>
  );
};

export default QuizRewardPopup;
