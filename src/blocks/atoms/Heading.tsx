import clsx from "clsx";
interface Props {
  className?: string;
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  varient?: "default" | "white_with_shadow";
}

const Heading: React.FC<Props> = ({ children, size, className, varient }) => {
  const variantClasses = getVariant(varient ?? "default");
  const sizesClasses = getSizes(size);
  return (
    <h3 className={clsx(" ", className, variantClasses, sizesClasses)}>
      {children}
    </h3>
  );
};

export default Heading;

const getSizes = (size: Props["size"]) => {
  switch (size) {
    case "small":
      return "md:text-2xl text-lg font-semibold font-heading";
    case "medium":
      return "xl:text-3xl lg:text-3xl md:text-2xl text-2xl";
    case "large":
      return "xl:text-4xl lg:text-4xl md:text-3xl text-2xl";
    default:
      return "text-md";
  }
};

const getVariant = (varient: Props["varient"]) => {
  switch (varient) {
    case "default":
      return "text-slate-70";
    case "white_with_shadow":
      return "font-semibold tracking-medium font-amar tracking-wide text-white drop-shadow-[2px_2px_2px_#18007ac6]";
    default:
      return "text-white";
  }
};
