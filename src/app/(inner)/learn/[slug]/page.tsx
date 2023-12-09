import { Courses } from "@/strapi/services/api";
import { getUserRewards } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";

interface Props {
  params: {
    slug: string;
  };
}

// const Page: React.FC<Props> = async ({ params: { slug } }) => {
//   const user = await getSession();
//   const [courseData, purchases, achievements] = await Promise.all([
//     Courses({ type: "GET_ONE", payload: parseInt(slug) }),
//     getTransactions(),
//     getUserRewards(user.user.id),
//   ]);

//   const handleStartButtonClick = (moduleIndex: number) => {
//     // Add logic for what happens when the start button is clicked
//     // For example, you might want to navigate to the module or track progress
//     console.log(`Start Module ${moduleIndex + 1}`);
//   };

//   return (
//     <div className="bg-gray-100 rounded-xl">
//       <hr />
//       <h1>{courseData.name}</h1>
//       <p>{courseData.desc}</p>

//       <h2>Modules:</h2>
//       {courseData.modules &&
//         courseData.modules.map((module, index) => (
//           <div key={module.id}>
//             <h3>{module.name}</h3>
//             <p>{module.desc}</p>
//             {module.module_slides && (
//               <div>
//                 <h4>Module Slides:</h4>
//                 {module.module_slides.map((slide) => (
//                   <div key={slide.id}>
//                     <img src={slide.mediaUrl} alt={slide.name} />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <button>Start Module</button>
//             <hr />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Page;

// export const revalidate = 10;

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BiLockAlt } from "react-icons/bi";
import Player from "@/blocks/molecules/course/Player";
import Modules from "@/blocks/molecules/course/Modules";
import CourseInfo from "@/blocks/molecules/course/Info";
import Description from "@/blocks/molecules/course/Description";
import ActionQuizBlock from "@/blocks/molecules/course/ActionQuizBlock";
import ActionRewardBlock from "@/blocks/molecules/course/ActionRewardBlock";
import ActivityPreparation from "@/blocks/molecules/course/ActivityPreparation";
import ActionPostYourActivity from "@/blocks/molecules/course/ActionPostYourActivity";
const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const user = await getSession();
  const [courseData, purchases, achievements] = await Promise.all([
    Courses({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions(),
    getUserRewards(user.user.id),
  ]);
  return (
    <div>
      <Player />
      <div className="px-5">
        <div className="mt-5">
          <section className="grid grid-cols-[auto_400px] gap-10">
            <div>
              <div>
                <h1 className="text-3xl font-heading font-semibold leading-6 my-2 text-gray-700 ">
                  Learn Next.js 11 - Build Modern Next.js Applications
                </h1>
              </div>
              <Description />
              <ActivityPreparation />
              <Modules />
              {/* <Quiz /> */}
              <Reward />
            </div>
            <div className="bg-[#FAFAFB] p-5 rounded-lg font-heading space-y-5">
              <CourseInfo />
              <ActionQuizBlock />
              <ActionRewardBlock />
              <ActionPostYourActivity />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;

const Quiz = () => {
  return (
    <div className="mt-8 mb-10">
      <h3 className="text-xl font-heading font-semibold mb-2 text-gray-700">
        Quizes
      </h3>
      <div className="h-[300px] rounded-xl grid grid-cols-[auto_2fr] p-5 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="bg-white shadow-md w-full h-full rounded-xl overflow-hidden">
          <img
            src="/quiz.jpg"
            alt=""
            className="rounded-xl w-[400px]- h-[300px] object-cover"
          />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-heading font-bold text-black opacity-70--">
            Engaging Learning through
            <span className=" text-purple-800 drop-shadow-md">
              Interactive Quizzes
            </span>
          </h1>
          <p className="text-lg mt-2 font-heading text-gray-800 hidden">
            Dive into our interactive quizzes for a fun learning experience!
            Test your knowledge, discover new insights, and enjoy diverse
            challenges. Join us in the quest for knowledge and fun
          </p>
          <div>
            <button className="inline-flex px-10 py-3 mt-5 border border-purple-500 text-purple-800 font-heading rounded-full  items-center gap-2">
              <BiLockAlt /> Unlock Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reward = () => {
  return (
    <Card title="Rewards" className="mt-5">
      <div className=" rounded-xl grid grid-cols-3  gap-5">
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 1</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 2</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 3</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 4</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module Quiz</p>
        </div>
      </div>
    </Card>
  );
};
