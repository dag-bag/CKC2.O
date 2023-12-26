"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
interface Props {
  variant?: "default";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disebled?: boolean;
  animation?: "none" | "scale" | "opacity";
}

const Button: React.FC<Props> = ({ children, className, ...rest }) => {
  const variantClasses = getVariant(rest.variant ?? "default");
  const animationProps = !rest.disebled
    ? getAnimationProps(rest.animation ?? "none")
    : {};

  return (
    <motion.button
      {...rest}
      {...animationProps}
      disabled={rest.disebled}
      className={clsx(variantClasses, className, "disabled:bg-opacity-80")}
    >
      {children}
    </motion.button>
  );
};

export default Button;

const getVariant = (variant: Props["variant"]) => {
  switch (variant) {
    case "default":
      return "bg-darkblue h-[45px] px-10 text-white rounded-full shadow-xl ";
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
