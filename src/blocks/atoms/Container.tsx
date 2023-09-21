import { clsx } from "clsx";

interface Props {
  parentCls?: string;
  childCls?: string;
  children: any;
}

const Container = ({ parentCls, childCls, children }: Props) => {
  return (
    <div className={parentCls}>
      <div className={clsx("max-w-7xl mx-auto", childCls)}>{children}</div>
    </div>
  );
};
export default Container;
