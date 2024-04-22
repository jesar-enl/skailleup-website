import Image from 'next/image';

export default function Partners() {
  const images = [
    {
      key: 'capitalone',
      src: 'capitalone.jpg',
    },
    {
      key: 'amazon',
      src: 'amazon.jpg',
    },
    {
      key: 'pwc',
      src: 'pwc.jpg',
    },
    {
      key: 'mcdonald',
      src: 'mcdonald.jpg',
    },
    {
      key: 'slack',
      src: 'slack.jpg',
    },
    {
      key: 'square',
      src: 'square.jpg',
    },
    {
      key: 'samsung',
      src: 'samsung.jpg',
    },
  ];
  return (
    <div className="flex flex-col items-center text-gray-800 justify-center mt-3 mb-4">
      <div className="flex flex-col p-4 justify-center text-center">
        <h1 className="text-3xl text-s-blue tracking-wider leading-snug mb-2 font-bold p-8">
          Several companies have a strong demand for the skills cultivated within our schools of learning.
        </h1>
        <p className="text-sm mx-auto text-gray-700 tracking-wider">
          kickstarting your career with unparalleled opportunities. Join forces
          with industry leaders and shape your future success through our
          cutting-edge education platform.
        </p>
      </div>
      <div className="flex justify-between p-4 whitespace-nowrap overflow-hidden">
        <div className="flex flex-wrap items-center gap-0">
          {images.map(({ key, src }) => {
            return (
              <Image
                key={key}
                src={`/images/${src}`}
                alt="company-logos"
                width={100}
                height={100}
                className="m-2 md:w-1/6"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
