import Link from "next/link";
import Image from "next/image";
const DiscoveryCard = ({ thumbnail, title, desc, id }: any) => {
  const path = `/discovery-bag/${id}`;
  return (
    <Link href={path}>
      <div className=" bg-white shadow-xl">
        <div className="relative aspect-w-10 aspect-h-6">
          <Image src={thumbnail} alt={title} fill />
        </div>
        <div className="md:p-5 p-2">
          <h3 className="font-medium font-amar md:text-xl text-sm line-clamp-2 leading-4 mt-1  text-black">
            {title}
          </h3>
          <p className="font-heading text-sm text-gray-600 leading-4 mt-1 line-clamp-2">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DiscoveryCard;
