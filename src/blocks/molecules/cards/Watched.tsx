import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  slug: string;
  watchedTimestamp: number;
  durationTimestamp: number;
}

const WatchedCard = ({ thumbnail, title, desc, watched, duration }: any) => {
  return (
    <Link href="/dashboard">
      <div className=" bg-white shadow-xl">
        <div className="relative aspect-w-10 aspect-h-6">
          <Image src={thumbnail} alt="image" fill />
          <Progress />
        </div>
        <div className="md:p-5 p-2">
          <h3 className="font-medium font-amar md:text-xl text-sm line-clamp-1 leading-5 mt-1  text-black">
            {title}
          </h3>

          <p>
            {parseInt(duration)} {parseInt(watched)}
          </p>

          <p className="text-sm text-gray-800 font-heading mt-2  leading-4 line-clamp-2 ">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WatchedCard;

const Progress = () => (
  <div className="h-1 absolute top-[98.5%] left-0 w-full bg-gray-100">
    <div className="w-[30%] h-1 bg-indigo-500 rounded-e-full "></div>
  </div>
);

function calculatePercentage(x: number, y: number): number {
  if (typeof x !== "number" || typeof y !== "number" || y === 0) {
    return 0;
  }

  const percentage: number = (x / y) * 100;
  return percentage;
}
