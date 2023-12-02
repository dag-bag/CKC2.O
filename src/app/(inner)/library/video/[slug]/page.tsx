/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BiLockAlt } from "react-icons/bi";
import { Videos } from "@/strapi/services/api";
import VideoInfo from "@/blocks/molecules/video/Info";
import ActionQuizBlock from "@/blocks/molecules/course/ActionQuizBlock";

const Page = async (props: any) => {
  const data = await Videos({ type: "GET_ONE", payload: props.params.slug });
  return (
    <div className="bg-gray-100  rounded-xl">
      {/* {JSON.stringify(data)} */}
      <Hero {...data} />
      <Reward />
    </div>
  );
};

export default Page;

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <h5 className="text-lg font-amar font-semibold text-gray-800">{title}</h5>
      <p className="text-gray-700 font-heading">{value}</p>
    </div>
  );
};

import Player from "@/blocks/molecules/player";

const Hero = ({
  thumbnail,
  title,
  desc,
  duration,
  price,
  grade,
  mentor,
  slug,
  publishedAt,
  mediaUrl,
  id,
}: any) => {
  const isLocked = false;
  return (
    <div className="grid grid-cols-[auto_350px] gap-5 rounded-xl">
      <main>
        <div className="relative aspect-w-12 aspect-h-7">
          {isLocked ? (
            <Image
              fill
              src={thumbnail}
              alt="marval-iamge"
              className="rounded-xl w-full"
            />
          ) : (
            <Player
              contentId={id}
              contentType="video"
              mediaURL={mediaUrl}
              thumbnail={thumbnail}
            />
          )}
        </div>
        <div className="px-5 mt-5">
          <h1 className="font-amar font-bold text-3xl mb-2">{title}</h1>
          <div className="grid grid-cols-3  my-5">
            <Infor
              title="Published:"
              value={convertToHumanReadableDate(publishedAt)}
            />
            <Infor title="Creator:" value={mentor} />
          </div>
          <div className="my-5 grid grid-cols-3">
            <Infor title="Credits Required:" value={`${price} CRD`} />
            <Infor title="Duration:" value={secondsToHoursMinutes(duration)} />
            <Infor title="Grade:" value={numbersStringToOrdinals(grade)} />
          </div>
          <p className=" font-heading text-gray-600">{desc}</p>
        </div>
      </main>
      <aside>
        <div className="max-w-xl">
          <div className="grid gap-2">
            <VideoInfo
              slug={slug}
              duration={secondsToHoursMinutes(duration)}
              reward={"100+ Stars and Badge"}
              title={title}
              type="video"
              price={price}
              shareableURL={"something"}
            />
            <ActionQuizBlock />
          </div>
        </div>
      </aside>
    </div>
  );
};

const Quiz = () => {
  return (
    <div className="bg-white mt-5 flex flex-col gap-5 p-10 rounded-xl items-cener justify-between">
      <div>
        <h3 className="font-heading text-xl font-semibold">
          Complete Quiz & Earn Reward
        </h3>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>

      <button className=" py-3 px-10 flex items-center justify-center text-white  bg-black rounded-full font-heading  gap-2">
        <BiLockAlt /> Unlock
      </button>
    </div>
  );
};

const Reward = () => {
  return (
    <Card title="Rewards" className="mt-5">
      <div className=" rounded-xl grid grid-cols-4  gap-5">
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After Comics completion</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After Quiz completion</p>
        </div>
      </div>
    </Card>
  );
};

function secondsToHoursMinutes(seconds: number): string {
  // Calculate hours and remaining seconds
  const hours: number = Math.floor(seconds / 3600);
  const remainingSeconds: number = seconds % 3600;

  // Calculate minutes
  const minutes: number = Math.floor(remainingSeconds / 60);

  // Format the result as "0hr 0m" string
  const formattedString: string = `${hours}hr ${minutes}m`;

  return formattedString;
}

function numbersStringToOrdinals(numbersString: string): string {
  const numbers: number[] = numbersString.split(",").map(Number);

  function numberToOrdinal(number: number): string {
    if (number >= 11 && number <= 13) {
      return number + "th";
    }

    const lastDigit = number % 10;
    switch (lastDigit) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
      default:
        return number + "th";
    }
  }

  return numbers.map(numberToOrdinal).join(", ");
}

function convertToHumanReadableDate(dateTimeString: string): string {
  const dateObject = new Date(dateTimeString);

  // Get individual components of the date
  const year: number = dateObject.getFullYear();
  const month: string = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day: string = dateObject.getDate().toString().padStart(2, "0");

  // Create the human-readable date string
  const humanReadableDate: string = `${year}-${month}-${day}`;

  return humanReadableDate;
}
