/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { BiLockAlt, BiTrash, BiUpload } from "react-icons/bi";
import { Textarea, Modal, FileButton, Button } from "@mantine/core";
import { CreateQuestion } from "@/services/discovery-jar";
import useSession from "@/hooks/use-session";
import Image from "next/image";
const DiscoveryJarPopup = () => {
  const { session } = useSession();
  const [opened, { open, close }] = useDisclosure(false);
  const [files, setFiles] = useState<File | null>(null);
  const initialState = {
    question: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleTextareaChange = (event: any) => {
    setFormData({ ...formData, question: event.target.value });
  };
  const [loading, setLoading] = useState(false);
  const onClose = () => {
    setLoading(true); // Set loading to true when starting the request
    CreateQuestion({
      user: session.user.id,
      question: formData.question,
      discovery_jar_config: 1,
    })
      .then(() => {
        setFormData({ question: "" });
        setFiles(null);
        close();
      })
      .finally(() => {
        setLoading(false); // Reset loading state after request completion (success or error)
      });
  };
  return (
    <>
      <button
        onClick={open}
        className="bg-blue-500 text-white text-xl px-20 py-3 rounded-full font-heading mt-4"
      >
        Ask Question
      </button>

      <Modal
        classNames={{
          content: "!bg-[#00B3FF] !rounded-[30px] !p-3",
        }}
        opened={opened}
        size={"1168px"}
        onClose={close}
        centered
        withCloseButton={false}
      >
        <div className="w-full h-[517px] grid grid-cols-[1.3fr_1fr] bg-[#00B3FF]  ">
          <div className="center">
            <Image
              src="/onboard/grade.png"
              width={500}
              height={500}
              alt="user"
            />
          </div>
          <div>
            <div className="border-2-- p-5 rounded-[30px] bg-white h-full">
              <h3 className=" text-center font-amar text-3xl mt-3">
                Ask Your Question
              </h3>
              <div className="mt-8 relative">
                <Textarea
                  autosize
                  size="lg"
                  minRows={4}
                  maxLength={200}
                  value={formData.question}
                  placeholder="Ex. Why Astronaut wear special suit??"
                  onChange={handleTextareaChange}
                  radius={"lg"}
                />
                <div className="flex justify-end p-2 -mt-10 absolute right-2">
                  <p className="text-right  text-gray-600 ">
                    {formData.question.length}/200
                  </p>
                </div>
              </div>

              <div className="w-full h-[120px] border-2 border-gray-300 border-dashed rounded-xl center flex-col mt-5">
                <p className="text-lg text-gray-400 ">Upload Media</p>
              </div>

              <button className="bg-[#00B3FF] text-white text-xl w-[300px] py-3 rounded-full mt-8 mx-auto block font-amar">
                Submit
              </button>

              <p className="text-center mt-4">
                Best 5 questions will be answered by experts.
              </p>
            </div>
          </div>
        </div>

        {/* Modal content */}
        {/* <div className="mt-2">
          <Textarea
            autosize
            size="md"
            minRows={3}
            value={formData.question}
            maxLength={150}
            placeholder="Your Question.."
            onChange={handleTextareaChange}
          />
          <div className="flex justify-between p-2">
            <p className="text-sm mt-0 font-heading text-gray-600">
              Best 5 questions will be answered by experts.
            </p>
            <p className="text-right text-sm text-gray-600 ">
              {formData.question.length}/150
            </p>
          </div>
        </div>

        {files && (
          <div className="flex gap-2 mb-5 ">
            <img
              className="w-[150px] bg-gray-50"
              alt="anything"
              src={URL.createObjectURL(files)}
            />
          </div>
        )}

        <div className="flex items-end justify-end">
          <div className="flex gap-2">
            <FileButton
              onChange={setFiles}
              accept="image/png,image/jpeg/mp4/mp3"
            >
              {(props) => (
                <Button leftSection={<BiUpload size={20} />} {...props}>
                  {files ? "Change Media" : "Select Media"}
                </Button>
              )}
            </FileButton>
            {files && (
              <Button
                bg={"red"}
                onClick={() => setFiles(null)}
                leftSection={<BiTrash size={20} />}
              >
                Remove
              </Button>
            )}
          </div>
          <button
            type="button"
            className="ml-auto inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={onClose}
            disabled={loading} // Disable the button when loading is true
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div> */}
      </Modal>
    </>
  );
};

export default DiscoveryJarPopup;

{
  /* <Dropzone
accept={IMAGE_MIME_TYPE}
openRef={openRef}
onDrop={() => {}}
>
<div className="mt-5">
  <Dropzone.Accept>
    <p className="px-10 py-20  bg-green-100 center border-green-500  border-2 border-dashed rounded-lg">
      Upload here...
    </p>
  </Dropzone.Accept>
  <Dropzone.Reject>
    <p className="px-10 py-20  bg-red-100 center border-red-500 border-2 border-dashed rounded-lg">
      reject
    </p>
  </Dropzone.Reject>
  <Dropzone.Idle>
    <p className="px-10 py-20  bg-gray-100 center font-medium border-2 border-dashed rounded-lg font-heading">
      Select Video/Audio/Image
    </p>
  </Dropzone.Idle>
</div>
</Dropzone> */
}
