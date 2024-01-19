import { TextInput } from "@mantine/core";
const NewboardInput = ({
  size = "lg",
  placeholder,
  type,
  name,
  value,
  ...props
}: any) => {
  return (
    <TextInput
      size={size}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      {...props}
      classNames={{
        input: `
          !px-8
          !py-5
          !md:text-3xl
          !outline-none
          !border-b-2
          !border-blue-500
          !bg-blue-50
          !border-t-0
          !border-l-0
          !border-r-0
        `,
      }}
    />
  );
};

export default NewboardInput;
