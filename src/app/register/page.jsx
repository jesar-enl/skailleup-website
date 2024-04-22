import Image from 'next/image';
import Link from 'next/link';
import SignupImage from '../../../public/images/login-image.jpg';

// const styles = {
//     image: {
//         height: '100%',
//         width: '30%'
//     }
// }
export const metadata = {
  title: 'Register - SkailleUp',
  description:
    'Register yourself to start the excellent journey of Education with us at SkailleUp.',
};

const Register = () => {
  return (
    <div className="flex justify-center bg-[#e3edfc]">
      <div className="flex w-full rounded max-w-screen-lg my-10 mx-2">
        {/* Left Side - Image */}
        <div
          style={{ position: 'relative' }}
          className="hidden sm:hidden w-1/2 p-8"
        >
          <Image
            src='/images/login-image.jpg'
            alt="image 1"
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side - Sign Up Form */}
        <div className="w-1/2 p-8 bg-[#ffffff]">
          <p className="text-right text-sm mt-5 mb-7">
            Have an account?{' '}
            <Link href="/login" className="text-[#04ED8D]">
              Sign In!
            </Link>
          </p>
          <p className="text-[24px] font-bold">Sign Up</p>
          <p className="text-sm py-[15px] mb-4">
            Start your learning journey on Skailleup with these few steps.
          </p>

          <form className="bg-white">
            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="surname"
                >
                  Surname
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  type="password"
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="dateofbirth"
                >
                  Date of Birth
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateofbirth"
                  type="password"
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="phonenumber"
                >
                  Phone number
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phonenumber"
                  type="password"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-3"
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
              />
            </div>

            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="stateofresidence"
                >
                  State of residence
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="stateofresidence"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm mb-3"
                  htmlFor="discovery"
                >
                  How did you hear about us?
                </label>
                <input
                  className="appearance-none border border-[#CAC4D0] rounded w-full py-2 px-3 mb-3 bg-[#2C5BBA12] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="discovery"
                  type="password"
                />
              </div>
            </div>

            <p className="text-center text-sm mb-8 font-600">
              By clicking register, you agree to{' '}
              <Link href="" className="text-[#04ED8D]">
                Terms of use
              </Link>{' '}
              and acknowledge that you have read the{' '}
              <Link href="" className="text-[#04ED8D]">
                Privacy policy
              </Link>
            </p>

            <button
              className="bg-[#04ED8D] tracking-wider mb-8 w-full hover:bg-[#08ED8D] text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
