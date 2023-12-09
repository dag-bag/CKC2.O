import Link from "next/link";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";

const TipsVideoCard = ({ thumbnail, title, desc, premium, id }: any) => {
  const href = `/dashboard/tips/${id}`;
  return (
    <>
      <Link href={href} className="overflow-hidden relative grid">
        <div className="bg-white font-heading group hover:scale-90 scale duration-500 shadow-slate-600 shadow-md">
          <div className="relative aspect-w-10 aspect-h-6 overflow-hidden">
            <Image src={thumbnail} alt={title} fill />
            <div className="w-full h-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-200">
              <button className="w-[45px] h-[45px] bg-indigo-500 center rounded-full text-white absolute bottom-3 right-3 shadow-xl">
                <IoPlay size={22} />
              </button>
            </div>

            {premium && (
              <div className="w-full h-full">
                <button className=" bg-black  border-blue-500 border md:text-sm]  tracking-wide px-5 py-1.5 text-sm center gap-1 rounded-full text-white absolute bottom-3 left-3 shadow-xl">
                  Premium
                </button>
              </div>
            )}
          </div>

          <div className="md:p-5 p-2  bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500 ">
            <h3 className="font-medium !font-amar md:text-xl text-sm leading-6 md:mt-1 line-clamp-1 md:line-clamp-none">
              {title}
            </h3>

            <h3 className="font-medium font-amar  text-sm line-clamp-2 leading-5 my-1  text-gray-600">
              {desc}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TipsVideoCard;
