"use client";
import Image from "next/image";
import { BsCameraFill } from "react-icons/bs";
import AvatarEditor from "react-avatar-editor";
import { Dialog, Transition } from "@headlessui/react";
import { useState, useRef, Fragment, ChangeEventHandler } from "react";

interface Props {
  defaultImage: string;
}

const ProfilePictureSelector = ({ defaultImage }: Props) => {
  const fileInput = useRef<any>(null);
  const [profile, setProfile] = useState<File | null>(null);

  const cropRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [slideValue, setSlideValue] = useState(10);
  const [preview, setPreview] = useState<string | null>(null);

  const handleProfilePictureUpdate = () => {
    fileInput.current.click();
  };

  const handleClearFileInput = () => {
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  // this handle decrease quality of image
  const handleSave = async () => {
    if (cropRef) {
      // Get the cropped image from react-avatar-editor
      const canvas = cropRef.current.getImageScaledToCanvas();

      // Decrease image quality
      const quality = 0.7; // Adjust the quality as needed
      const dataUrl = canvas.toDataURL("image/jpeg", quality);

      // Convert the data URL to a Blob
      const blob = await fetch(dataUrl).then((res) => res.blob());

      // Set the preview with the compressed image
      setPreview(URL.createObjectURL(blob));

      // Perform other actions as needed
      setIsOpen(false);
      setProfile(null);
      setSlideValue(10);
      handleClearFileInput();
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setProfile(null);
    setSlideValue(10);
    handleClearFileInput();
  };

  const handleChangeFileInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setProfile(e.target.files ? e.target.files[0] : null);
    setIsOpen(true);
  };

  return (
    <>
      {/* profile picture update popup  */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={handleCancel} as="div" className="relative z-[99999]">
          {true && (
            <Transition.Child as={Fragment}>
              <div className="fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm" />
            </Transition.Child>
          )}

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex  justify-center items-center text-center p-6 `}
            >
              <Dialog.Panel
                className={`w-full max-w-md transform overflow-hidden rounded-md
                 bg-white  text-left align-middle shadow-xl transition-all`}
              >
                <div className={`px-6 py-8`}>
                  <AvatarEditor
                    className="rounded-md"
                    rotate={0}
                    border={50}
                    ref={cropRef}
                    borderRadius={150}
                    image={profile as File}
                    scale={slideValue / 10}
                    color={[0, 0, 0, 0.72]}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <input
                    type="range"
                    value={slideValue}
                    defaultValue={slideValue}
                    className="w-full mt-5"
                    onChange={(e) => setSlideValue(parseInt(e.target.value))}
                  />
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <button
                      onClick={handleSave}
                      className="bg-indigo-500 text-white py-2 md:w-auto w-full px-10 rounded-md font-medium "
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-100 py-2 md:w-auto w-full px-10 rounded-md font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>

      <input
        type="file"
        ref={fileInput}
        className="hidden"
        accept=".png, .svg, .jpg"
        onChange={handleChangeFileInput}
      />

      {/* profile picture view and toggler  */}

      <div className="w-[200px] h-[200px] bg-gray-500 rounded-full relative overflow-hidden">
        <Image
          fill
          alt="profile picture"
          className="object-cover"
          src={preview ?? defaultImage}
        />

        <div
          onClick={handleProfilePictureUpdate}
          className="w-full h-full bg-black bg-opacity-50 cursor-pointer absolute text-white flex items-center justify-center"
        >
          <BsCameraFill size={30} />
        </div>
      </div>
    </>
  );
};

export default ProfilePictureSelector;
