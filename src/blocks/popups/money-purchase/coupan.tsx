import Button from "@/blocks/atoms/Button";
import { TextInput } from "@mantine/core";
const CoupanValidate = ({
  coupan,
  loading,
  setCoupan,
  handleCouponApplication,
}: any) => {
  return (
    <div>
      <div className="grid md:grid-cols-[3fr_1fr] gap-2 my-5">
        <TextInput
          name="coupancode"
          value={coupan}
          onChange={(e) => {
            setCoupan(e.target.value);
          }}
          classNames={{
            input: "uppercase",
          }}
          placeholder="COUPAN CODE"
          size="md"
        />
        <Button
          loading={loading}
          onClick={handleCouponApplication}
          className="rounded-md bg-darkblue !py-0 !h-auto !text-sm"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default CoupanValidate;
