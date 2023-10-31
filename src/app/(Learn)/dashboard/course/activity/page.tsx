const Page = () => {
  return (
    <div>
      <div className="h-[300px] bg-gray-100 rounded-xl p-10 flex-col center">
        <h1 className="font-heading text-3xl font-semibold">Activity Time</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <section className="max-w-5xl mx-auto p-5">
        <Supplies />
        <DecorativeSupplies />
        <SafetyRequirement />
        <FollowSteps />
        <Upload />
      </section>
    </div>
  );
};

const Upload = () => {
  return (
    <section className="p-5">
      <h1 className="text-2xl font-heading capitalize font-semibold">
        Upload & Share
      </h1>
      <div className="border-2 border-dashed h-[200px] rounded-xl mt-5 center font-heading">
        <p>Drag your images here or Click to select</p>
      </div>
    </section>
  );
};

export default Page;

const SafetyRequirement = () => {
  return (
    <div className="h-[200px] bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex justify-center p-20 flex-col">
      {/* <p className="uppercase--  font-heading text-sm">
        Adult Supervision Mendatory
      </p> */}
      <h1 className="text-3xl font-heading font-semibold my-2 text-blue-800">
        Safety Precautions
      </h1>
      <p className="max-w-xl text-gray-800">
        At least 1 adult to oversee the activity, especially when using
        scissors, glue, or other potentially dangerous tools.
      </p>
    </div>
  );
};

const Supply = ({ title, description, qty }: any) => {
  return (
    <li className="  flex items-center justify-between border-b py-5  border-gray-100">
      <div>
        <h3 className="text-lg font-heading">{title}</h3>
        <p className="text-sm  text-gray-500 ">{description}</p>
        <div className="mt-2 flex gap-2 ">
          <button className="text-sm border-gray-100 px-5 py-1 border  rounded-full font-heading">
            Buy Cardboard
          </button>

          <button className="text-sm border-gray-100 px-5 py-1 border  rounded-full font-heading">
            Buy Foam-board
          </button>
        </div>
      </div>
      <div className="font-heading">{qty}</div>
    </li>
  );
};

const Supplies = () => {
  return (
    <section className="p-5 ">
      <h1 className="text-2xl font-heading capitalize font-semibold">
        supplies
      </h1>

      <ul className="mt-5 space-y-2">
        <Supply
          title="Cardboard or Foam Board"
          description="1 large piece for the base of the house."
          qty={"1 QTY"}
        />
        <Supply
          title="Construction Paper or Cardstock"
          description="Various colors for decorating and making furniture."
          qty={"1 QTY"}
        />
        <Supply
          title="Scissors"
          description="1-2 pairs of child-safe scissors."
          qty={"1 QTY"}
        />
        <Supply
          title="Glue or Glue Stick"
          description="1 bottle of white glue or several glue sticks."
          qty={"1 QTY"}
        />
        <Supply
          title="Ruler"
          description="1 for measuring and cutting straight lines."
          qty={"1 QTY"}
        />
        <Supply
          title="Markers or Colored Pencils"
          description="1 set for drawing and coloring."
          qty={"1 QTY"}
        />
      </ul>
    </section>
  );
};

const DecorativeSupplies = () => {
  return (
    <section className="p-5">
      <h1 className="text-2xl font-heading capitalize font-semibold">
        Optional Decorative Supplies
      </h1>

      <ul className="mt-5 space-y-2">
        <Supply
          title="Craft Sticks"
          description=" 10-20 for making fences, furniture, or other details"
          qty={"10-20 QTY"}
        />
        <Supply
          title="Fabric Scraps"
          description=" Assorted pieces for making tiny curtains or rugs."
          qty={"1-2 QTY"}
        />
        <Supply
          title="Small Beads or Buttons"
          description="For doorknobs, drawer handles, etc."
          qty={"5 QTY"}
        />
      </ul>
    </section>
  );
};

const Steps = ({ title, description, number }: any) => {
  return (
    <li className=" list-decimal flex items-center gap-5 border-b py-5  border-gray-100">
      <div className="font-medium font-heading text-xl">{number}.</div>
      <div>
        <h3 className="text-lg font-heading">{title}</h3>
        <p className="text-sm  text-gray-500 ">{description}</p>
      </div>
    </li>
  );
};

const FollowSteps = () => {
  return (
    <section className="p-5">
      <h1 className="text-2xl font-heading capitalize font-semibold">
        Construction Steps
      </h1>

      <ul className="mt-5 space-y-2 list-decimal">
        <Steps
          number={1}
          title="Planning"
          description="Decide on the house's size and layout."
          qty={"10-20 QTY"}
        />
        <Steps
          number={2}
          title="Construction"
          description="Cut and assemble the main structure."
          qty={"1-2 QTY"}
        />
        <Steps
          number={3}
          title="Decoration (Optioanal) "
          description="Add details like furniture, wallpaper, etc."
          qty={"5 QTY"}
        />
        <Steps
          number={4}
          title="Finishing Touches"
          description="Final additions and detailing."
          qty={"5 QTY"}
        />
      </ul>
    </section>
  );
};
