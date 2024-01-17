import { PinInput } from "@mantine/core";
import Button from "@/blocks/atoms/Button";
import Heading from "@/blocks/atoms/Heading";
const Validate = ({ pin, setPin, validate }: any) => {
  return (
    <div>
      <Heading size="small" className="text-center mb-5">
        Verify OTP
      </Heading>
      <div className="center">
        <PinInput
          size="md"
          value={pin}
          type={/^[0-9]*$/}
          className="mx-auto"
          onChange={(e) => {
            setPin(e);
          }}
        />
      </div>
      <Button onClick={validate} animation="scale" className="w-full mt-5">
        Verify
      </Button>
    </div>
  );
};

export default Validate;
