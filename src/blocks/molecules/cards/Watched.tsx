import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  slug: string;
  watchedTimestamp: number;
  durationTimestamp: number;
}

const WatchedCard = () => {
  return (
    <Link href="/dashboard">
      <div className=" bg-white shadow-xl">
        <div className="relative aspect-w-10 aspect-h-6">
          <Image src="/jupiter.jpg" alt="image" fill />
          <Progress />
        </div>
        <div className="md:p-5 p-2">
          <h3 className="font-medium font-amar md:text-xl text-sm line-clamp-1 leading-5 mt-1  text-black">
            What if Jupiter never existed in our solar system?
          </h3>

          <p className="text-sm text-gray-800 font-heading mt-2 hidden md:block leading-4 ">
            Embark on an exciting adventure to the final frontier with the
            concept...
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
