import Image from "next/image";
import { Modal } from "@mantine/core";

interface Props {
  title: string;
  desc: string;
  points: number;
  onClose: () => void;
}

const RewardPopup = ({ title, desc, points, onClose }: Props) => {
  return (
    <div>
      <Modal
        centered
        size={330}
        opened={true}
        onClose={close}
        withCloseButton={false}
        classNames={{
          body: "!p-0",
          content: "!rounded-2xl",
        }}
      >
        <div className="relative h-[180px] bg-[url('/challanges.png')] bg-cover bg-center"></div>
        <div>
          <div className="center">
            <p className="absolute p-3 bg-white rounded-full">
              <span className="bg-white border rounded-full px-8 py-2 -m-2 flex gap-1 font-heading font-semibold">
                <Image width={25} height={25} alt="123" src={"/coin3.png"} />
                {points}
              </span>
            </p>
          </div>

          <h3 className="text-xl text-center mt-10 font-semibold font-amar">
            {title}
          </h3>
          <p className="text-center text-sm mt-1">{desc}</p>
        </div>

        <div className="p-2 grid">
          <button
            onClick={onClose}
            className="bg-gray-100 py-2.5 rounded-xl mt-5"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default RewardPopup;
