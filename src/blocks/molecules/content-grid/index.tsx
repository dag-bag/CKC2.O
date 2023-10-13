import Content from "./content";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

export type ContentType = "live_now" | "live_upcoming" | "live_past";

interface Props {
  title: string;
  type?: ContentType;
}

const ContentGrid: React.FC<Props> = ({ title, type }) => {
  return (
    <div className={`my-5`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-medium">{title}</h3>
        <Controller />
      </div>
      <Grid>
        <Content type={type} />
        <Content type={type} />
        <Content type={type} />
        <Content type={type} />
        <Content type={type} />
      </Grid>
    </div>
  );
};

export default ContentGrid;

const Grid = ({ children }: any) => {
  return <div className="grid grid-cols-5 gap-3">{children}</div>;
};

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
