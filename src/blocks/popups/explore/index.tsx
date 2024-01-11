"use client";
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

import RootModal from "../popup-root";
import Button from "@/blocks/atoms/Button";
import toast from "react-hot-toast";
import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";
interface Props {
  title: string;
  shareableURL: string;
}

const ExplorePopup = ({ opened, close }: any) => {
  return (
    <div className="popup-container">
      <RootModal size={"lg"} centered onClose={close} opened={opened}>
        <div className="flex-col flex items-center gap-5 px-5">
          <Image
            src={"/logo-2.png"}
            alt="logo"
            className="sm:w-20 sm:h-20 h-12 w-12"
            width={80}
            height={80}
          />
          <Heading className="text-center font-semibold font-amar" size="large">
            STE(A)M learning through the exciting domain of Astronomy and Space!
          </Heading>
          <Button
            href="auth/register"
            className="rounded-xl px-20 w-full"
            animation="scale"
          >
            Free Access
          </Button>
          <p>7-day trial, then from £4.99 per month. Cancel anytime.</p>

          <Heading size="small">Already have an account?</Heading>
          <Button
            className="!bg-darkgreen"
            animation="scale"
            href="/auth/login"
          >
            Login
          </Button>
        </div>
      </RootModal>
    </div>
  );
};

export default ExplorePopup;
