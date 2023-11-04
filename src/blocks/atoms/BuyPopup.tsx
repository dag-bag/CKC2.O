"use client";

import { BiLockAlt } from "react-icons/bi";
import { useDisclosure } from "@mantine/hooks";
import { Modal, CloseButton } from "@mantine/core";

export default function BuyPopup() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <div className="py-10 relative">
          <h1 className="font-heading text-center text-2xl mb-2">Unlock</h1>
          <p className="text-sm italic text-center mb-4 font-medium">
            Unlock -{" "}
            <span className="font-normal">
              &quot;Avengers United Infinity Comic (2023) #4 &quot;
            </span>
          </p>

          <div onClick={close} className="absolute top-0 right-0">
            <CloseButton />
          </div>

          <div className=" max-w-sm mx-auto grid grid-cols-1 items-end justify-between gap-2 px-5">
            <div className="font-heading bg-gray-50 px-5 py-2 rounded-xl border-2">
              <p className="text-sm">Balance</p>
              <h3 className="font-semibold text-xl font-game text-gray-800">
                10,000 <span className="text-sm font-normal">CRDs</span>
              </h3>
            </div>
            <div>
              <button className=" py-2 w-full  flex items-center justify-center  border-2 rounded-xl font-heading  gap-2">
                Purchase
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
