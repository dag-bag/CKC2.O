import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BsDot } from "react-icons/bs";

const Winners = ({ winners }: any) => (
  <div>
    <Card title="Winners" className="mt-5">
      <div className="grid grid-cols-3 gap-5">
        {winners.map((winner: any) => (
          <Winner key={winner.id} {...winner.user} />
        ))}
      </div>
    </Card>
  </div>
);

export default Winners;

export const Winner = ({ avatar, firstname, grade }: any) => {
  return (
    <div className="font-heading">
      <Image
        src={"/banner1.png"}
        width={300}
        height={300}
        alt="price"
        className="rounded-md"
      />
      <div className="flex items-center gap-2 mt-2">
        <Image
          src={avatar}
          width={40}
          height={40}
          alt="price"
          className="rounded-full"
        />
        <div>
          <h5 className=" leading-3 text-sm">{firstname}</h5>
          <p className="flex items-center text-xs">
            Grade <BsDot /> {grade}
          </p>
        </div>
      </div>
    </div>
  );
};
