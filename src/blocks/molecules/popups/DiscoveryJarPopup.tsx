"use client";

import { TextInput } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { Fragment, useState, useRef } from "react";
import { IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Dialog, Transition } from "@headlessui/react";
import { BiLockAlt } from "react-icons/bi";

const DiscoveryJarPopup = () => {
  const openRef = useRef<() => void>(null);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="flex items-center gap-2 rounded-full bg-[#A72F2F] px-5 py-2.5  font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <BiLockAlt /> I have a Question
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 mb-4 text-gray-900"
                  >
                    Discovery Jar
                  </Dialog.Title>
                  <div className="mt-2">
                    <TextInput size="md" placeholder="Your Question.." />
                    <Dropzone
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
                          <p className="px-10 py-20  bg-gray-100 center font-medium border-2 border-dashed rounded-lg font-fun">
                            Drag Video here or click to select Video
                          </p>
                        </Dropzone.Idle>
                      </div>
                    </Dropzone>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="mr-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DiscoveryJarPopup;
