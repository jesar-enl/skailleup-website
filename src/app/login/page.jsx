import Image from 'next/image';
import Link from 'next/link';

// const styles = {
//     image: {
//         height: '100%',
//         width: '30%'
//     }
// }
export const metadata = {
  title: 'Login - SkailleUp',
  description:
    'Login to access your account and start the excellent journey of Education with us at SkailleUp.',
};

const Login = () => {
  return (
    <div className="flex justify-center h-screen bg-[#e3edfc]">
      <div className="flex w-full rounded my-10 max-w-screen-lg">
        {/* Left Side - Image */}
        <div
          style={{ position: 'relative' }}
          className="hidden sm:hidden w-1/2 p-8"
        >
          <Image
            src="/images/login-image.jpg"
            alt="image 1"
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side - Sign Up Form */}
        <div className="w-1/2 p-8 bg-[#ffffff]">
          <p className="text-right text-sm mt-5 mb-7">
            Not Skailled up yet?{' '}
            <Link href="/register" className="text-[#04ED8D]">
              Start Learning Now!
            </Link>
          </p>
          <p className="text-[24px] font-bold">Sign In</p>
          <p className="text-sm py-[15px] mb-4">
            Input your email address and password for a secure login to the
            Skailleup Student Portal.
          </p>

          <form className="bg-white">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-3"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm mb-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
              />
            </div>
            <div className="flex">
              <button
                className="bg-[#04ED8D] w-full hover:bg-[#08ED8D] text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Proceed to Dashboard
              </button>
            </div>
            <p className="text-center text-sm mt-6 font-600">
              Forgot your password?{' '}
              <Link href="" className="text-[#04ED8D]">
                Reset now
              </Link>
            </p>
            <p className="text-center text-sm mt-4 font-600">
              Don&#39;t have an account?{' '}
              <Link href="/register" className="text-[#04ED8D]">
                Create one now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
