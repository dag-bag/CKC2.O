import Heading from "@/blocks/atoms/Heading";
import { PinInput } from "@mantine/core";
import Button from "@/blocks/atoms/Button";

const Validate = ({ pin, setPin, validate }: any) => {
  return (
    <div>
      <Heading size="small" className="text-center mb-5">
        Verify Otp
      </Heading>
      <div className="center">
        <PinInput
          value={pin}
          onChange={(e) => {
            setPin(e);
          }}
          type={/^[0-9]*$/}
          className="mx-auto"
          size="md"
        />
      </div>
      <Button onClick={validate} animation="scale" className="w-full mt-5">
        Varify Otp
      </Button>
    </div>
  );
};

export default Validate;
