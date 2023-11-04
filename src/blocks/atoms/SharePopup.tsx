"use client";

import {
  BiShare,
  BiLogoGmail,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiLogoFacebook,
} from "react-icons/bi";

import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
} from "react-share";

import { useDisclosure } from "@mantine/hooks";
import { Modal, CloseButton } from "@mantine/core";

export default function SharePopup() {
  const [opened, { open, close }] = useDisclosure(false);

  const shareUrl = "this is url";
  const title = "this is title";

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <div className="py-10 relative">
          <h1 className="font-heading text-center text-2xl">Share</h1>
          <p className="text-sm italic text-center mb-4">
            The Power of Sharing Knowledge
          </p>

          <div onClick={close} className="absolute top-0 right-0">
            <CloseButton />
          </div>

          <div className="flex gap-2 center">
            <EmailShareButton url={shareUrl} title={title} separator="::">
              <div className="p-3 bg-gray-100 rounded-full">
                <BiLogoGmail size={25} />
              </div>
            </EmailShareButton>

            <WhatsappShareButton url={shareUrl} title={title} separator="::">
              <div className="p-3 bg-gray-100 rounded-full">
                <BiLogoWhatsapp size={25} />
              </div>
            </WhatsappShareButton>

            <FacebookShareButton url={shareUrl} title={title}>
              <div className="p-3 bg-gray-100 rounded-full">
                <BiLogoFacebook size={25} />
              </div>
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={title}>
              <div className="p-3 bg-gray-100 rounded-full">
                <BiLogoTwitter size={25} />
              </div>
            </TwitterShareButton>
          </div>
        </div>
      </Modal>

      <button
        onClick={open}
        className=" py-2.5 px-10 flex items-center justify-center  border-gray-500 border rounded-full font-heading gap-2"
      >
        <BiShare /> Share
      </button>
    </>
  );
}
