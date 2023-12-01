"use client";

import { BiLockAlt } from "react-icons/bi";
import { useDisclosure } from "@mantine/hooks";
import { Modal, CloseButton } from "@mantine/core";

interface Props {
  price: number;
  type: string;
  title: string;
}

export default function BuyPopup({ price, type, title }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <div className="py-10 relative">
          <h1 className="font-heading text-center text-2xl mb-2">Unlock</h1>
          {/* <p className="text-lg  text-center mb-4 font-medium font-heading">
            &quot;{title}&quot;
          </p> */}

          <div onClick={close} className="absolute top-0 right-0">
            <CloseButton />
          </div>

          <div className=" max-w-sm mx-auto grid grid-cols-1 items-end justify-between gap-2 px-5">
            {/* <div className="font-heading bg-gray-50 px-5 py-2 rounded-xl border-2">
              <p className="text-sm">Balance</p>
              <h3 className="font-semibold text-xl font-game text-gray-800">
                10,000 <span className="text-sm font-normal">CRDs</span>
              </h3>
            </div> */}

            <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 bg-gray-100 p-4 rounded-xl">
              <div>
                <h2 className="font-heading font-semibold mb-1 text-sm ">
                  Name
                </h2>
                <p className="text-sm">&quot;{title}&quot;</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1 text-sm ">
                  Type
                </h3>
                <p className="text-sm">{type}</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1 text-sm ">
                  Credits
                </h3>
                <p className="text-sm">{price}</p>
              </div>
            </div>

            <div>
              <button className="py-2 w-full  flex items-center justify-center  border-2 rounded-xl font-heading  gap-2">
                Unlock
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <button
        onClick={open}
        className=" py-3 px-20 flex items-center justify-center text-white  bg-black rounded-full font-heading  gap-2"
      >
        <BiLockAlt /> Unlock
      </button>
    </>
  );
}
