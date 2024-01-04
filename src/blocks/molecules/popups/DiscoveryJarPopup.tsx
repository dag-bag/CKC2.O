/* eslint-disable @next/next/no-img-element */
"use client";

import * as yup from "yup";
import Image from "next/image";
import { useState } from "react";
import useSession from "@/hooks/use-session";
import { useDisclosure } from "@mantine/hooks";
import { Textarea, Modal } from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateQuestion } from "@/services/discovery-jar";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import Button from "@/blocks/atoms/Button";
// Yup schema for form validation
const schema = yup.object().shape({
  question: yup.string().required("Question is required"),
});

interface FormData {
  question: string;
}

const DiscoveryJarPopup = () => {
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
      await CreateQuestion({
        user: session.user.id,
        question: data.question,
        discovery_jar_config: 1,
      });
      reset();
      setFiles(null);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        animation="scale"
        onClick={open}
        className="bg-blue-500 text-white text-xl px-20 py-3 rounded-full font-heading mt-4"
      >
        Ask Question
      </Button>

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
        <div className="sm:w-full lg:h-[517px] grid sm:grid-cols-[1.3fr_1fr] bg-[#00B3FF]  ">
          <div className="center sm:flex hidden">
            <Image
              src="/onboard/grade.png"
              width={500}
              height={500}
              alt="user"
            />
          </div>

            <div className="border-2 sm:p-5 px-2 py-4 rounded-[30px] w-full bg-white h-full">
              <h3 className="text-center font-amar sm:text-3xl mt-3">
                Ask Your Question
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="sm:mt-8 mt-4 relative">
                  <Textarea
                    autosize
                    size="lg"
                    minRows={4}
                    maxLength={200}
                    {...register("question")}
                    placeholder="Ex. Why Astronaut wear special suit??"
                    radius={"lg"}
                  />
                  <div className="flex justify-end p-2 -mt-10 absolute right-2">
                    <p className="text-right text-red-500">
                      {errors.question?.message}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:h-[120px] h-[50px] border-2 border-gray-300 border-dashed rounded-xl center flex-col mt-5">
                  <p className="text-lg text-gray-400 ">Upload Media</p>
                </div>

                <Button
                  animation="scale"
                  className="bg-[#00B3FF] text-white text-xl sm:w-[300px] py-3 rounded-full mt-8 mx-auto block font-amar"
                  type="submit"
                  disebled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
              <p className="text-center mt-4">
                Best 5 questions will be answered by experts.
              </p>
            </div>

        </div>
      </Modal>
    </>
  );
};

export default DiscoveryJarPopup;
