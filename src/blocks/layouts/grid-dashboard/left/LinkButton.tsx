import Image from "next/image";
import Link from "next/link";

interface Props {
  Icon: string;
  title: string;
  href: string;
}

const LeftButton: React.FC<Props> = ({ Icon, title, href }) => {
  return (
    <Link passHref href={href} className="w-full">
      <div className="text-left text-gray-500   mb-1 font-medium center justify-between w-[180px] pl-6  gap-3 py-2 rounded-xl ">
        {title} <Image src={Icon} alt=".." width={22} height={22} />
      </div>
    </Link>
  );
};

export default LeftButton;
