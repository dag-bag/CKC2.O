import Button from "@/blocks/atoms/Button";
import Heading from "@/blocks/atoms/Heading";
import { TextInput } from "@mantine/core";

const Send = ({ email, setEmail, loading, handler }: any) => {
  return (
    <div>
      <Heading size="small" className="text-center mb-5">
        Email Verification
      </Heading>
      <TextInput
        disabled={loading}
        classNames={{
          input: "!text-center",
        }}
        value={email}
        size="lg"
        name="email"
        type="email"
        placeholder="your email"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Button
        loading={loading}
        onClick={handler}
        animation="scale"
        className="w-full mt-5"
      >
        Send OTP
      </Button>
    </div>
  );
};

export default Send;
