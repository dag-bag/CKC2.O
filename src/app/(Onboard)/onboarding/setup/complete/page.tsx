import {BsArrowRight} from "react-icons/bs"
import Link from "next/link";
import { Free, Premium } from "@/blocks/molecules/cards/plan";

const Page = () => {
    return (
      <div
        className="bg-cover w-[800px] h-[800px] bg-no-repeat bg-center flex items-center flex-col  justify-center"
      >
          <img
            alt="coin"
            src="/coin.png"
            className="rounded-full w-[100px] h-[100px] object-cover"
          />
   <h1 className="text-3xl font-heading mt-5 text-center font-semibold">Congratulation! <br /> Your Profile is created</h1>
   <p className=" text-gray-600 mt-2">You received a batch and can access more by upgrading your plan.</p>


<div className="grid grid-cols-2 gap-5 mt-5">
  <Free/> <Premium/>
</div>

{/* 
   <Link  href="/buy/membership"  className="border-2 w-full p-5 rounded-xl mt-5 grid grid-cols-[2fr_1fr]">
    <div>
      <h1 className="text-xl font-medium font-heading leading-6">Upgrade to Premium</h1>
    <p className="text-sm text-gray-600 ">Premium upgrades offer better features and exclusive benefits.</p>
    </div>
    <div className="center">
      <BsArrowRight color={"gray"} size={20}/>
    </div>
   </Link>

   <Link href="/settings/referral" className="border-2 w-full p-5 rounded-xl mt-3 grid grid-cols-[2fr_1fr]">
    <div>
      <h1 className="text-xl font-medium font-heading leading-6">Refer and Earn</h1>
    <p className="text-sm text-gray-600 ">Refer and Earn. lets you earn rewards by inviting others to join.</p>
    </div>
    <div className="center">
      <BsArrowRight color={"gray"} size={20}/>
    </div>
   </Link> */}

  

   
      </div>
    );
  };
  
  export default Page;

  