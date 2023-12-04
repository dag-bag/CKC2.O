import Container from "@/blocks/UI/PageContainer";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Content from "@/blocks/molecules/content-grid/content";
import { Courses } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
const tags = ["JavaScript", "HTML", "CSS", "Programming", "Web Development"];

import CourseCard from "@/blocks/molecules/cards/Course";

const DashboardPage = async () => {
  const [data, purchases] = await Promise.all([
    Courses({ type: "GET" }),
    getTransactions(),
  ]);

  return (
    <div>
      <div className="grid gap-5 px-2">
        <BannerCarousel />
      </div>

      <div className="mt-5 flex gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className="bg-gray-200 rounded-full px-10 py-2.5 text-sm font-heading"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3 py-5">
        {data.map((course: any) => (
          <CourseCard {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
};
export default DashboardPage;
