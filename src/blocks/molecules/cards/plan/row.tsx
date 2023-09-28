import Image from "next/image";

interface Props {
  name: string;
  src: string;
}

const Row = ({ name, src }: Props) => {
  return (
    <li className="flex items-center space-x-3">
      <Image src={src} alt={name} width={30} height={30} />
      <span className="text-md">{name}</span>
    </li>
  );
};

export default Row;
