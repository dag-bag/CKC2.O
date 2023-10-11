import Link from "next/link";

const Content = () => {
  const tags = ["Video", "Galaxy", "Astronaut"];
  return (
    <Link href="/dashboard/slug">
      <div className="rounded-xl p-2">
        <div className="bg-blue-100 h-[180px] rounded-lg bg-[url('/thumbnail.jpg')] bg-cover relative"></div>
        <h3 className="text-lg font-medium">Lorem ipsum dolor sit amet.</h3>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium text-gray-800 mr-2 bg-white px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Content;

const LiveTag = () => {
  return (
    <div className="bg-red-500 px-3 py-1 top-2  right-2 absolute text-white rounded-lg flex items-center gap-2 ">
      <div className="w-[8px] h-[8px] bg-white rounded-full "></div>
      <p className="text-sm font-medium">Live</p>
    </div>
  );
};
