import Heading from "@/blocks/atoms/Heading";
import Button from "@/blocks/atoms/Button";
import { PasswordInput, TextInput } from "@mantine/core";

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
      <TextInput size="lg" readOnly value={email} />
      <PasswordInput
        size="lg"
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
