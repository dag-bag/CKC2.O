import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";
import Form from "@/blocks/atoms/forms/login";
import SpaceBreaker from "@/blocks/atoms/SpaceBreakWithText";
import GoogleAuthentication from "@/blocks/atoms/GoogleAuthButton";

export const metadata = {
  title: "Login | Cosmic Kids Club",
  description: "Registration",
};

const LoginPage = () => {
  return (
    <div className="md:h-screen center font-fun bg-gray-100">
      <div className="rounded-lg grid md:grid-cols-2 bg-white max-w-7xl w-full mx-auto">
        <div className="bg-blue-100 rounded-lg center hidden md:flex">
          <Image
            width={500}
            height={500}
            alt="cosmic-kids-club"
            src={"/onboard/registration.png"}
          />
        </div>
        <div className="md:p-10 xl:p-20 p-8">
          <Heading size="large" className="font-semibold font-amar mb-5">
            Join Cosmic Kids Club <br /> Learning & Adventure!
          </Heading>
          <GoogleAuthentication type="signin" />
          <SpaceBreaker />
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
