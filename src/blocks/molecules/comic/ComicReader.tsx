"use client";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useRecentlyWatched from "@/hooks/useRecentlyWached";
import Button from "@/blocks/atoms/Button";

const ComicReader = ({ id, title, thumbnail, grade, content, desc }: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { addToRecentlyWatched } = useRecentlyWatched();
  const handleRead = () => {
    addToRecentlyWatched({
      id,
      title,
      grade,
      desc,
      type: "comic",
      imgUrl: thumbnail,
    });
    open();
  };
  return (
    <div>
      <Modal fullScreen opened={opened} onClose={close}>
        <div className="bg-white z-50">
          <div className="h-[100%]">
            <iframe
              src={content}
              allowFullScreen={true}
              className="h-[calc(100vh-100px)] border-2 w-full"
            />
          </div>
        </div>
      </Modal>
      <Button
        animation="scale"
        onClick={handleRead}
        className="py-3 px-10 flex items-center justify-center text-white bg-lightblue rounded-full font-heading gap-2 w-full"
      >
        Read Comic
      </Button>
    </div>
  );
};

export default ComicReader;
