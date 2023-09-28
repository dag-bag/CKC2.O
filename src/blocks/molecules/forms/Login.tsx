import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="font-fun ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-w-[450px] ">
        <div className="w-full bg-white/90 backdrop-blur-sm  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-[url('/login-curve.svg')]--- bg-no-repeat bg-bottom bg-cover---">
          <div className="p-6  sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Log in to your account
            </h1>

            <button className="flex mb-7 mt-4 items-center gap-2 bg-gray-50 drop-shadow-md border border-purple-500 px-6 pl-3 py-2 rounded-full ">
              <FcGoogle size={25} />
              <span className="font-medium ">Sign In with Google</span>
            </button>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Email Adress"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline ml-auto"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                // className="w-full text-gray-800 bg-[#00BEF9] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center"
                className="btn-game"
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
