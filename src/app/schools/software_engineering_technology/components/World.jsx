import Image from 'next/image';
import Link from 'next/link';

export default function World() {
  return (
    <div
      className="flex flex-col md:flex-row w-full bg-cover bg-center h-[40rem]"
      style={{ backgroundImage: "url('/images/world_map.jpg')" }}
    >
      <div className="relative flex h-auto bg-black bg-opacity-90"></div>
      <div className="flex flex-col  my-8 p-8 shadow-lg h-96 md:h-auto md:w-1/2">
        <div className="relative bg-slate-600 rounded-lg bg-opacity-90 flex flex-col p-4">
          <h1 className="relative text-xl md:text-3xl font-semibold text-white p-4 tracking-wider">
            Over 50M+ Available Opportunities
          </h1>
          <p className="text-sm md:text-lg leading-tight tracking-wide text-white p-4">
            A skill set like this is in high demand, with over 85% of
            individuals possessing these abilities being actively sought after
            by top-tier companies. There are more than 50 million opprtunities
            for individuals with such skills, abd those who possess them also
            enjoy a considerable degree of work flexibility.
          </p>
          <div className="flex justify-start mt-8">
            <Link href="#">
              <button
                type="button"
                className="flex items-center gap-4 bg-green-500 text-sm text-white px-4 py-2 rounded-full"
              >
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:h-auto w-full md:w-1/2">
        <Image
          src="/images/happy-student.png"
          alt="happy student"
          width={400}
          height={300}
          // layout="responsive"
        />
      </div>
    </div>
  );
}
