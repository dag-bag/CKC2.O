const challenges = [
    { title: "Create a Todo List App", isCompleted: false },
    { title: "Build a Weather App", isCompleted: true },
    { title: "Implement User Authentication", isCompleted: false },
    { title: "Create a Responsive Website", isCompleted: true },
    { title: "Build a Calculator", isCompleted: true },
    { title: "Implement a Chat Application", isCompleted: false },
    { title: "Create a Countdown Timer", isCompleted: true },
    { title: "Build a Memory Game", isCompleted: false },
    { title: "Implement a To-Do List with Local Storage", isCompleted: true },
    { title: "Create a Simple Drawing App", isCompleted: false },
  ];

import Card from "@/blocks/UI/Card";
import clsx from "clsx";


const Page = () => {
    return (
        <div>

<Card title="Title of Challange">
  <div className="grid grid-cols-[300px_auto]">
   <div className="center">
      <div className="w-[200px] h-[200px]  mx-auto rounded-full bg-[url('/tes-bedge.jpg')] bg-cover bg-center  border-2"></div>

    </div>
    <div className=" flex items-center">
       <div className="flex-col">
       <h1 className="text-2xl font-heading font-semibold">Title of Challanges</h1>
        <p>Lorem ipsum dolor sit amet.</p>
       </div>
    </div>
   </div>
   
</Card>
<Card title="Challanges" className="mt-5">
    <div className="space-y-3">
        {challenges.map((challange)=> (
        <div key={challange.title} className="flex gap-5 border-- items-center">
            <div className={clsx()}>{challange.isCompleted ? "✅": "⭕"}</div>
            <h5 className="font-heading">{challange.title}</h5>
        </div>
    ))}
    </div>
</Card>
        </div>
    )
}

export default Page
