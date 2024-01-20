import * as yup from "yup";
import { TextInput } from "@mantine/core";
import Button from "@/blocks/atoms/Button";
import Heading from "@/blocks/atoms/Heading";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

interface SendProps {
  loading: boolean;
  setEmail: (email: string) => void;
  onSubmitHandler: (email: string) => void;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/,
      "We can only accept Gmail or Yahoo mail."
    ),
});

const Send: React.FC<SendProps> = ({ setEmail, loading, onSubmitHandler }) => {
  const resolver = yupResolver(schema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const handleFormSubmit: SubmitHandler<{ email: string }> = (data) => {
    setEmail(data.email);
    onSubmitHandler(data.email);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Heading size="small" className="text-center mb-5">
        Email Verification
      </Heading>
      <TextInput
        {...register("email")}
        required
        disabled={loading}
        className={`!text-center ${errors.email ? "border-red-500" : ""}`}
        size="lg"
        type="email"
        placeholder="Your email"
        error={(errors as any).email?.message}
        classNames={{
          input: "!text-center",
          error: "!mt-2 !text-sm !font-fun",
        }}
      />
      <Button
        type="submit"
        loading={loading}
        animation="scale"
        className="w-full mt-5"
      >
        Send OTP
      </Button>
    </form>
  );
};

export default Send;
