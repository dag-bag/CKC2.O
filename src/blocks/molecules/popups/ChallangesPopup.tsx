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

import { useState } from "react";
import Button from "@/blocks/atoms/Button";
import useSession from "@/hooks/use-session";
import { useDisclosure } from "@mantine/hooks";
import { Textarea, Modal } from "@mantine/core";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { RequestChallange } from "@/services/challange";
import { useParams, useRouter } from "next/navigation";
import { FileInput } from "@mantine/core";
// Yup schema for form validation
const schema = yup.object().shape({
  question: yup.string().required("Question is required"),
});

interface FormData {
  question: string;
}

const ChallangesPopup = () => {
  const uploadFile = (file: File, callback: (url: string) => void) => {
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
      .send((err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Get the URL of the uploaded file
          const uploadedUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${file.name}`;
          console.log("File uploaded successfully. URL:", uploadedUrl);
          callback(uploadedUrl);
        }
      });
  };

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

  const [value, setValue] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await uploadFile(value as File, async (url) => {
        await RequestChallange({
          file: url,
          id: session.user.id,
          challenge_id: P.slug,
        });
      });
      reset();
      setFiles(null);
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
        Upload
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

                <div className="mt-5">
                  <FileInput
                    placeholder="File Input"
                    value={value as any}
                    onChange={setValue}
                  />
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
