import {
  BiShare,
  BiLogoGmail,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiLogoFacebook,
  BiLink,
} from "react-icons/bi";
import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
} from "react-share";
import toast from "react-hot-toast";
import RootModal from "./popup-root";
import Button from "../atoms/Button";
import { useDisclosure } from "@mantine/hooks";

interface Props {
  title: string;
  shareableURL: string;
}

interface ShareButton {
  Component: React.ComponentType<any>;
  Icon: React.ComponentType<any>;
}

const shareButtons: ShareButton[] = [
  {
    Component: EmailShareButton,
    Icon: BiLogoGmail,
  },
  {
    Component: WhatsappShareButton,
    Icon: BiLogoWhatsapp,
  },
  {
    Component: FacebookShareButton,
    Icon: BiLogoFacebook,
  },
  {
    Component: TwitterShareButton,
    Icon: BiLogoTwitter,
  },
];

const SharePopup: React.FC<Props> = ({ title, shareableURL }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(shareableURL);
    toast.success("Link copied to clipboard");
  };

  return (
    <div className="popup-container">
      <Button
        animation="scale"
        onClick={open}
        className="w-full py-2.5 px-10 flex items-center justify-center  border-gray-500 border rounded-full font-heading gap-2 !bg-transparent !text-black !shadow-none"
      >
        <BiShare /> Share
      </Button>

      <RootModal centered onClose={close} opened={opened}>
        <h1 className="text-center text-2xl font-amar">Share</h1>
        <p className="text-center">Share the knowledge and joy.</p>
        <div className="flex gap-2 center mt-3">
          {shareButtons.map(({ Component, Icon }, index) => (
            <Component key={index} url={shareableURL} title={title}>
              <div className="p-3 bg-gray-100 rounded-full">
                <Icon size={25} />
              </div>
            </Component>
          ))}
          <button
            onClick={copyLinkHandler}
            className="w-[49px] h-[49px] bg-gray-100 center rounded-full"
          >
            <BiLink size={22} />
          </button>
        </div>
      </RootModal>
    </div>
  );
};

export default SharePopup;
