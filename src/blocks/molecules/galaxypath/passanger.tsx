import { realign } from ".";
import Image from "next/image";
import { motion } from "framer-motion";

const Passenger = ({ progress, animated, path }: any) => {
  const varients = {
    initial: {
      offsetDistance: `${progress - 16}%`,
      offsetPath: `path('${path}')`,
    },
    animate: {
      rotate: realign(progress),
      offsetDistance: `${progress}%`,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      animate="animate"
      initial="initial"
      variants={varients}
      onAnimationComplete={animated}
      className="rounded-full absolute z-50 w-[80px] h-[80px] md:w-[120px] md:h-[120px] drop-shadow-2xl"
    >
      <Image
        fill
        alt="iamge"
        src={"/onboard/cropped-spaceship.png"}
        className="rounded-full border-2--"
      />
    </motion.div>
  );
};

export default Passenger;
