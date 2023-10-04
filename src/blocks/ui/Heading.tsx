import { createElement, ReactHTML } from "react";
import { textResponsiveSizeOnTheBasisOfVariant } from "./__configuration";

interface HeadingProps {
  color?: string;
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({ variant, color, children }) => {
  return createElement(
    variant as keyof ReactHTML,
    {
      className: `${textResponsiveSizeOnTheBasisOfVariant}`,
    },
    children
  );
};

export default Heading;
