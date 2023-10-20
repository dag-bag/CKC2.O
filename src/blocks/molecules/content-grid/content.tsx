import Link from "next/link";
import { type ContentType } from ".";
import Image from "next/image";
const tags = ["Video", "Galaxy", "Astronaut"];

interface Props {
  type?: ContentType;
}

const Content: React.FC<Props> = ({ type }) => {
  if (type == "live_upcoming") {
    return <LiveUpcomingContent />;
  }
  if (type == "live_now") {
    return <LiveContent />;
  }
  return (
    <Link href="/dashboard/slug" className="rounded-xl">
      <div className="rounded-xl p-2">
        <div className="relative h-[170px] rounded-lg overflow-hidden">
          <Image src="/1.webp" alt="image" fill />
        </div>

        <h3 className="text-lg font-medium font-heading mt-2">
          Quizmania - The untold story
        </h3>
        <p className="text-sm -mt-1">Lorem ipsum dolor sit amet.</p>
      </div>
    </Link>
  );
};

export default Content;

const LiveContent = () => {
  return (
    <div className="rounded-xl p-2 bg-black text-white ">
      <div className="bg-blue-100 h-[180px] rounded-lg bg-[url('/bg-1.jpg')] bg-cover relative">
        <LiveTag />
      </div>

      <div>
        <h3 className="text-lg font-medium mt-2">Cosmic Quiz Mania Live!</h3>
        <p className="text-sm mb-2 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-white w-full text-black px-5 py-2  gap-2 text-sm font-medium rounded-lg">
          Join Now
        </button>
      </div>
    </div>
  );
};

const LiveUpcomingContent = () => {
  return (
    <div className="rounded-xl p-2 bg-black text-white ">
      <div className="bg-blue-100 h-[180px] rounded-lg bg-[url('/live.avif')] bg-cover relative">
        <p className="text-sm absolute top-2 left-2 rounded-xl inline tracking-wide text-white bg-black px-4 py-2">
          10 days left
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium mt-2">Cosmic Quiz Mania Live!</h3>
        <p className="text-sm rounded-xl inline uppercase tracking-wide text-indigo-300">
          25 December, 5 PM
        </p>
        <p className="text-sm mb-2 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-white w-full text-black px-5 py-1.5  gap-2 text-sm font-medium rounded-lg">
            Notify Me
          </button>
          <button className="bg-white-- w-full text-white border-2 px-5 py-1.5  gap-2 text-sm font-medium rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const LiveTag = () => {
  return (
    <div className="bg-red-500 px-3 py-1 top-2  right-2 absolute text-white rounded-lg flex items-center gap-2 ">
      <div className="w-[8px] h-[8px] bg-white rounded-full "></div>
      <p className="text-sm font-medium">Live</p>
    </div>
  );
};
