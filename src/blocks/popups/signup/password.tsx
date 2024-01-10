import Heading from "@/blocks/atoms/Heading";
import { PasswordInput, PinInput, TextInput } from "@mantine/core";
import Button from "@/blocks/atoms/Button";

const GeneratePassword = ({
  email,
  password,
  setPassword,
  loading,
  handler,
}: any) => {
  return (
    <div className="grid gap-2">
      <Heading size="small" className="text-center mb-5">
        Create Password
      </Heading>
      <TextInput size="md" readOnly value={email} />
      <PasswordInput
        size="md"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button
        loading={loading}
        onClick={handler}
        animation="scale"
        className="w-full mt-5"
      >
        Submit
      </Button>
    </div>
  );
};

export default GeneratePassword;
