import Image from "next/image";
import Form from "@/blocks/atoms/forms/reset-password";
import AuthBreak from "@/blocks/atoms/SpaceBreakWithText";
import Link from "next/link";

export const metadata = {
  title: "Reset Password | Cosmic Kids Club",
  description: "Reset Password",
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
          <p className="text-center my-5 font-heading">
            Create your new password here.
          </p>
          <div>
            <Form />
          </div>
          <AuthBreak text="or continue with" />
          <p className="center">
            back to{" "}
            <Link
              href={"/auth/password/forget"}
              className="font-semibold pl-2 underline "
            >
              Forget Password
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
