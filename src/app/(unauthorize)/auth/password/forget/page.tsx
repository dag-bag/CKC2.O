import Image from "next/image";
import Form from "@/blocks/atoms/forms/forget-password";
import AuthBreak from "@/blocks/atoms/SpaceBreakWithText";
import Link from "next/link";
export const metadata = {
  title: "Forget Password | Cosmic Kids Club",
  description: "Forget Password",
};

const ForgetPasswordPage = () => {
  return (
    <div className="md:h-screen center font-fun bg-gray-100">
      <div className="rounded-lg  bg-white max-w-md w-full mx-auto">
        <div className="p-10 grid">
          <Link href={"/"}>
            <Image
              alt="cosmic-kids-club"
              src={"/logo-2.png"}
              width={80}
              height={80}
              className="mx-auto"
            />
          </Link>

          <h5 className="text-center my-5 font-heading">
            We'll send you a link to reset your password
          </h5>
          <div>
            <Form />
          </div>
          <AuthBreak text="or continue with" />
          <p className="center">
            back to{" "}
            <Link
              href={"/auth/login"}
              className="font-semibold pl-2 underline "
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
