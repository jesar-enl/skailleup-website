import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

export default function Empowerment() {
  return (
    <div className="bg-[url('/images/benefits.jpg')] bg-no-repeat bg-cover h-[35rem] flex flex-col md:flex-row items-end mx-auto justify-between gap-4 text-white w-full">
      <div className="bg-black bg-opacity-90 flex flex-row items-center justify-center mx-auto p-4 shadow-2xl rounded-t-3xl h-84  max-w-xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-3 text-xl md:text-3xl tracking-wider text-white font-semibold p-2">
            Empower Your Future, Learn, Grow, Succeed
          </h1>
          <p className="text-sm tracking-wide leading-snug mb-2">
            Welcome to the cutting-edge realm of the School of Software and
            Technology. <br />
            We transcend the boundaries of convectional learning. Here,
            knowledge <br />
            meets creativity, and curiosity fuels a journey of digital
            discovery.
          </p>
          <div className="flex justify-start mt-8">
            <Link href="#">
              <button
                type="button"
                className="flex items-center gap-4 bg-green-500 text-sm text-white px-4 py-2 rounded-full"
              >
                <span>Start Learning</span>
                <LuArrowUpRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
