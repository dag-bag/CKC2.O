"use client";

import { BiLockAlt } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa6";
import useUnlock from "@/hooks/useUnlock";
import { Modal, CloseButton } from "@mantine/core";

interface Props {
  id: number;
  type: string;
  price: number;
  title: string;
}

export default function BuyPopup({ price, type, title, id }: Props) {
  const { loading, unlock, open, opened, close } = useUnlock({
    type,
    label: title,
    coins: price,
    content_id: id,
  });

  const modalContent = (
    <div className="py-10 relative">
      <h1 className="font-heading text-center text-2xl mb-2">Unlock</h1>
      <div onClick={close} className="absolute top-0 right-0">
        <CloseButton />
      </div>
      <div className="max-w-sm mx-auto grid grid-cols-1 items-end justify-between gap-2 px-5">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 bg-gray-100 p-4 rounded-xl">
          <InfoItem title="Name" value={`"${title}"`} />
          <InfoItem title="Type" value={type} />
          <InfoItem title="Credits" value={price} />
        </div>

        <div>
          <button
            className="py-2 w-full flex items-center justify-center border-2 rounded-xl font-heading gap-2"
            onClick={unlock}
          >
            {loading ? (
              <span className="animate-spin">
                <FaSpinner />
              </span>
            ) : (
              "Unlock"
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        {modalContent}
      </Modal>

      <UnlockButton onClick={open} />
    </>
  );
}

interface InfoItemProps {
  title: string;
  value: string | number;
}

function InfoItem({ title, value }: InfoItemProps) {
  return (
    <div>
      <h2 className="font-heading font-semibold mb-1 text-sm">{title}</h2>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function UnlockButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="py-3 px-20 flex items-center justify-center text-white bg-[#00B3FF] rounded-full font-heading gap-2"
    >
      <BiLockAlt /> Unlock
    </button>
  );
}
