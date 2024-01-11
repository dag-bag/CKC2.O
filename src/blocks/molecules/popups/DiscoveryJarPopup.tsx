/* eslint-disable @next/next/no-img-element */
"use client";
import AWS from "aws-sdk";

const S3_BUCKET = "myckc";
const REGION = "us-east-1";

AWS.config.update({
  accessKeyId: "AKIAXYKJUEY7HVUC5COD",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});
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
import { FileInput } from "@mantine/core";
import axios from "axios";
// Yup schema for form validation
const schema = yup.object().shape({
  question: yup.string().required("Question is required"),
});

interface FormData {
  question: string;
}

//Optional Import
const DiscoveryJarPopup = () => {
  const uploadFile = (file: File) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  const { session } = useSession();
  const [opened, { open, close }] = useDisclosure(false);

  // const [files, setFiles] = useState<File | null>(null);

  const [value, setValue] = useState<File[] | null>([]);

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
      // Upload the media file to Strapi
      const formData = new FormData();
      formData.append("files", value[0]);

      const mediaUploadResponse = await axios.post(
        "https://ckc-strapi-production-33d2.up.railway.app/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Get the media URL from the Strapi upload response
      const mediaUrl = mediaUploadResponse.data[0].url;

      // Create the question with the media URL
      await CreateQuestion({
        user: session.user.id,
        question: data.question,
        discovery_jar_config: 1,
        media: mediaUrl, // Assuming mediaUrl is an array in your API call
      });

      reset();
      setValue(null);
      close();
    } catch (error) {
      console.error(error);
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

              {/* <div className="w-full sm:h-[120px] h-[50px] border-2 border-gray-300 border-dashed rounded-xl center flex-col mt-5">
                <p className="text-lg text-gray-400 ">Upload Media</p>
              </div> */}
              <FileInput
                placeholder="File Input"
                multiple
                value={value as any}
                onChange={setValue}
              />
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
