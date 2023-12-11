/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { BiLockAlt, BiTrash, BiUpload } from "react-icons/bi";
import { Textarea, Modal, FileButton, Button } from "@mantine/core";
import { CreateQuestion } from "@/services/discovery-jar";
import useSession from "@/hooks/use-session";
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
        type="button"
        onClick={open}
        className="flex items-center gap-2 rounded-full bg-blue-500 px-10 py-2.5  font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-heading"
      >
        <BiLockAlt /> I have a Question
      </button>

      <Modal
        opened={opened}
        size={"lg"}
        onClose={close}
        title="Ask your question"
        centered
      >
        {/* Modal content */}
        <div className="mt-2">
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
        </div>
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
