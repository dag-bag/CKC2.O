import { strapi } from "@/libs/strapi";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

// ... (other imports)

const HeyzinePopup = () => {
  return (
    <div className="bg-white z-50">
      <div className="h-[100%]">
        <iframe
          allowFullScreen={true}
          className="h-[calc(100vh-100px)] border-2 w-full"
          src="https://cosmickidsclub.aflip.in/1fcc274278.html"
        />
      </div>
    </div>
  );
};

export default HeyzinePopup;
