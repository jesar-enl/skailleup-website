import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import styles from '@/app/schools/software_engineering_technology/Hero.module.css'

export default function Hero({ data }) {
  const { head, description, image } = data;
  return (
    <div
      className={`${styles[image]} bg-no-repeat bg-cover h-[34rem] flex flex-col md:flex-row justify-between gap-4 text-white w-full`}
    >
      <div className="bg-s-blue bg-opacity-80 flex flex-col justify-center m-8 p-8 shadow-2xl rounded-xl h-96 md:h-88 md:w-1/2">
        <div className="mr-6">
          <h1 className="mb-3 text-xl md:text-3xl tracking-wider text-white font-bold">
            {head}
          </h1>
          <p className="text-sm tracking-wide mb-2">{description}</p>
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
