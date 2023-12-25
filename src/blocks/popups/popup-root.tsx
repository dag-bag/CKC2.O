import { Modal } from "@mantine/core";
import { ModalProps } from "@mantine/core";
import { BiX } from "react-icons/bi";

interface Props extends ModalProps {}
const RootModal: React.FC<Props> = (props) => {
  const rootConfiguration: any = {
    overlayProps: {
      blur: 3,
      backgroundOpacity: 0.55,
    },
    transitionProps: {
      transition: "rotate-left",
      duration: 500,
      timingFunction: "linear",
    },
    withCloseButton: false,
    classNames: {
      content: " !rounded-2xl",
    },
  };
  return (
    <Modal {...{ ...props, ...rootConfiguration }}>
      <div className="relative p-5 ">
        <button
          onClick={props.onClose}
          className="absolute -top-3  -right-3 rounded-full p-2 hover:bg-gray-100"
        >
          <BiX size={25} />
        </button>
        {props.children}
      </div>
    </Modal>
  );
};

export default RootModal;
