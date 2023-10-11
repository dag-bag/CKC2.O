import Content from "./content";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
interface Props {
  title: string;
}

const ContentGrid: React.FC<Props> = ({ title }) => {
  return (
    <div className={`my-5`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-medium">{title}</h3>
        <Controller />
      </div>
      <div className="grid grid-cols-5 gap-3">
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default ContentGrid;

const Controller = () => {
  return (
    <div className="grid grid-cols-2 w-[50px]">
      <button>
        <HiMiniChevronLeft size={22} />
      </button>
      <button>
        <HiMiniChevronRight size={22} />
      </button>
    </div>
  );
};
