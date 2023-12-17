"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { BiUpload } from "react-icons/bi";
import { Textarea, Modal, FileButton, Button } from "@mantine/core";
import { CreateQuestion } from "@/services/discovery-jar";
import useSession from "@/hooks/use-session";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { RequestChallange } from "@/services/challange";
import { useParams, useRouter } from "next/navigation";

// Yup schema for form validation
const schema = yup.object().shape({
  question: yup.string().required("Question is required"),
});

interface FormData {
  question: string;
}

const ChallangesPopup = () => {
  const P = useParams();
  const router = useRouter();
  const { session } = useSession();
  const [opened, { open, close }] = useDisclosure(false);
  const [files, setFiles] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await RequestChallange({
        file: "www.google.com",
        id: session.user.id,
        challenge_id: P.slug,
      });
      reset();
      setFiles(null);
      router.refresh();
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={open}
        className="bg-blue-500 text-white text-xl px-20 py-3 rounded-full font-heading mt-4"
      >
        Upload
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
                Submit Your Activity
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-8 relative">
                  <Textarea
                    autosize
                    size="lg"
                    minRows={4}
                    maxLength={200}
                    {...register("question")}
                    placeholder="Write about this activity"
                    radius={"lg"}
                  />
                  <div className="flex justify-end p-2 -mt-10 absolute right-2">
                    <p className="text-right text-red-500">
                      {errors.question?.message}
                    </p>
                  </div>
                </div>

                <div className="w-full h-[120px] border-2 border-gray-300 border-dashed rounded-xl center flex-col mt-5">
                  <p className="text-lg text-gray-400 ">Upload Media</p>
                </div>

                <button
                  className="bg-[#00B3FF] text-white text-xl py-2 w-full rounded-full mt-5 mx-auto block font-amar"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
              <p className="text-center mt-4">
                If you will be selected, you will be rewarded!
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChallangesPopup;
