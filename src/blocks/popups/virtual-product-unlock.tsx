import Image from "next/image";
import toast from "react-hot-toast";
import RootModal from "./popup-root";
import Button from "../atoms/Button";
import { updateUser } from "@/services/user";

interface Props {
  opened: boolean;
  close: () => void;
  type: "avatar" | "banner";
  image: string;
  title: string;
}

const VirtualProductUnlockPopup: React.FC<Props> = ({
  opened,
  close,
  type,
  image,
  title,
}) => {
  const onSetupHandler = async () => {
    toast.promise(updateUser({ [type]: image }), {
      loading: "Changing Avatar",
      success: "Avatar sucessfully updated!",
      error: "Error",
    });
    close();
  };
  return (
    <RootModal centered opened={opened} onClose={close}>
      <div>
        <h1 className="text-2xl font-amar text-center">
          <b>Congratulation 🎉</b>, <br /> "{title}" is unlocked.
        </h1>
        <div className="center mt-5">
          {type === "avatar" && (
            <Image
              alt="price"
              src={image}
              className="rounded-full overflow-hidden"
              width={200}
              height={200}
            />
          )}
          {type === "banner" && (
            <Image alt="price" src={image} width={300} height={300} />
          )}
        </div>
        <div className="center mt-5">
          <Button onClick={onSetupHandler} animation="scale" className="!px-20">
            Setup
          </Button>
        </div>
        <p className="text-center mt-2">Lorem ipsum dolor sit amet.</p>
      </div>
    </RootModal>
  );
};

export default VirtualProductUnlockPopup;
