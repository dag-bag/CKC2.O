"use client";

import clsx from "clsx";
import Loading from "./loading";
import { Loader } from "@mantine/core";
import { motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
interface Props {
  loading?: boolean;
  variant?: "default";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disebled?: boolean;
  animation?: "none" | "scale" | "opacity";
  // others
  type?: any;
}

import {} from "react";

const Button: React.FC<Props> = ({ loading, children, className, ...rest }) => {
  const variantClasses = getVariant(rest.variant ?? "default");
  const animationProps = !rest.disebled
    ? getAnimationProps(rest.animation ?? "none")
    : {};

  return (
    <motion.button
      {...rest}
      {...animationProps}
      disabled={rest.disebled || loading}
      className={clsx(variantClasses, className, "disabled:bg-opacity-80")}
    >
      {loading ? (
        <div className="center h-full">
          <Loader size={"xs"} color="white" />
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;

const getVariant = (variant: Props["variant"]) => {
  switch (variant) {
    case "default":
      return "bg-lightblue h-[50px] px-10 text-white rounded-full shadow-xl text-lg ";
    default:
      return "bg-darkblue text-white";
  }
};

const getAnimationProps = (animation: Props["animation"]) => {
  switch (animation) {
    case "scale":
      return {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      };
    case "opacity":
      return {
        whileHover: { opacity: 0.8 },
        whileTap: { opacity: 0.5 },
      };
    default:
      return {};
  }
};
