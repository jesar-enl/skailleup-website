import Image from 'next/image';

export default function CareerOpprtunity({ data }) {
  const { careerParagraph, careerList } = data;
  return (
    <div className="border border-t-gray-900 border-b-gray-900 my-8 bg-white flex flex-col p-4">
      <h1 className="text-s-blue text-xl md:text-3xl mb-3 leading-normal font-semibold">
        Career Opprtunity
      </h1>
      <p className="text-gray-800 text-sm tracking-wider mb-3">
        {careerParagraph}
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row gap-4">
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center">
          <Image
            src="/images/opportunity.png"
            alt="Career Opportunity"
            width={520}
            height={190}
          />
        </div>
        <div className="border w-full md:w-1/2 h-full border-gray-400 p-3">
          <ul className="my-12 mx-4 p-3">
            {careerList.map((list) => (
              <li key={list} className="list-disc mb-1 text-gray-800 tracking-wider leading-snug">
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
