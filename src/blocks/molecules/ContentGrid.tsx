// this component used to hold content (carousel)
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
const ContentGrid = ({ title }: any) => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-medium">{title}</h3>
        <div className="grid grid-cols-2 w-[50px]">
          <button>
            <HiMiniChevronLeft size={22} />
          </button>
          <button>
            <HiMiniChevronRight size={22} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default ContentGrid;

const Content = () => {
  return (
    <div className="bg-blue-100 h-[200px] rounded-lg bg-[url('/thumbnail.jpg')] bg-cover"></div>
  );
};
