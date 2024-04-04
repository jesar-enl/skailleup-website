import { IoCheckmarkDone } from 'react-icons/io5';
import Link from 'next/link';

export default function Pricing({ data }) {
  const { packageData } = data;

  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <h1 className="text-xl md:text-3xl font-semibold text-s-blue p-3 tracking-wider leading-snug">
        Choose a package
      </h1>
      <div className="flex flex-col md:flex-row gap-3 mr-4 mb-7">
        {packageData.map(
          ({ packageHead, packagePrice, packageList, index }) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-s-blue rounded-md shadow-lg"
            >
              <h1 className="font-semibold pb-3 tracking-wider leading-snug">
                {packageHead}
              </h1>
              <p className="font-bold tracking-wide">{packagePrice}</p>
              <div className="flex justify-start mt-4 mb-8">
                <Link href="#">
                  <button
                    type="button"
                    className="flex items-center gap-4 bg-green-500 text-sm text-white px-8 py-2 rounded-full"
                  >
                    <span>Pay now</span>
                  </button>
                </Link>
              </div>
              <ul className="mb-7">
                {packageList.map((list, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-500 leading-7 gap-3"
                  >
                    <IoCheckmarkDone />
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
