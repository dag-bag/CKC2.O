import Input from "./input";
import { Select } from "@mantine/core";
import useOnboard from "@/hooks/useOnboard";
import { countries } from "@config/index";
const NewboardLocationAction = () => {
  const { setter, storage } = useOnboard();

  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        onChange={(event: any) => {
          setter("city", event?.target.value);
        }}
        value={storage?.city}
        name="city"
        placeholder="City"
      />
      <Input
        onChange={(event: any) => {
          setter("state", event?.target.value);
        }}
        value={storage?.state}
        name="state"
        placeholder="State"
      />

      <Select
        size="lg"
        classNames={{
          input:
            "!px-8 !py-5 md:!text-2xll !outline-none !border-b-2 !border-blue-500 !bg-blue-50   !border-t-0 !border-l-0 !border-r-0",
        }}
        value={storage?.country}
        placeholder="Country"
        data={countries}
        onChange={(event: any) => {
          setter("country", event);
        }}
      />
    </div>
  );
};
export default NewboardLocationAction;
