"use client";

import useRecentlyWatched from "@/hooks/useRecentlyWached";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Unlocked = ({ id, title, content, thumbnail, grade }: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { addToRecentlyWatched } = useRecentlyWatched();
  const handleRead = () => {
    addToRecentlyWatched({
      title,
      desc: content,
      imgUrl: thumbnail,
      grade,
      id: id,
      type: "comic",
    });
    open();
  };
  return (
    <div className="bg-white mt-5 flex gap-5 p-10 rounded-xl items-cener justify-between">
      <div>
        <h3 className="font-heading text-xl font-semibold">Comic Unlocked!</h3>
        <p className="text-sm">You can now read this unlocked comic.</p>
      </div>
      <Modal fullScreen opened={opened} onClose={close}>
        <div className="bg-white z-50">
          <div className="h-[100%]">
            <iframe
              allowFullScreen={true}
              className="h-[calc(100vh-100px)] border-2 w-full"
              src="https://cosmickidsclub.aflip.in/1fcc274278.html"
            />
          </div>
        </div>
      </Modal>
      <button
        onClick={handleRead}
        className="py-3 px-10 flex items-center justify-center text-white bg-black rounded-full font-heading gap-2"
      >
        Read Now
      </button>
    </div>
  );
};

export default Unlocked;
