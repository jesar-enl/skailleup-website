import Image from 'next/image';
import Link from 'next/link';
import { cardData } from '../cardData';

const Card = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 p-2 font-['Urbanist']">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-blue-950 text-4xl font-bold mb-3">
          Browse course by schools
        </h2>
        <p className="text-sm text-gray-800 mb-3">
          Making sure that those interested in exploring various courses can
          readily access various resources for their growth.
        </p>
      </div>
      <div className="flex justify-center mt-3 gap-2">
        {cardData.map((card, index) => {
          return (
            <div
              className="flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
              key={index}
            >
              <div className="relative h-40 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <Image
                  src={card.image}
                  alt={card.school}
                  width={800}
                  height={700}
                />
              </div>
              <div className="flex flex-col justify-between h-full">
                <div className="p-6">
                  <h5 className="block mb-2 text-base antialiased font-semibold leading-snug tracking-normal text-gray-900">
                    {card.school}
                  </h5>
                  <ul className="block text-base antialiased font-light leading-relaxed text-inherit">
                    {card.description.map((list) => {
                      return (
                        <li key={list} className="list-disc">
                          {list}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="p-6 pt-0 flex justify-end">
                  <Link href={card.href}>
                    <button
                      type="button"
                      className="align-bottom select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-950 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
