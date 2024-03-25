import { schools } from '@/app/menuItems';

export default function SchoolDescription() {
  return (
    <section className="h-['700px'] grid grid-cols-1 lg:flex lg:justify-between gap-12 md:gap-0.4 text-white py-4 my-4 mx-3">
      <div className="my-auto relative z-10 h-full flex justify-center items-center">
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/STKObkUuvf4?si=bvUb6sTi2GTIzGpH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bg-s-blue px-3 lg:-ml-48 ml-0 flex justify-center shadow-lg w-full lg:w-2/3 text-white relative z-0">
        <div className="hidden lg:block w-1/3"></div>
        <div className="w-full md:w-2/3 flex flex-col p-4 lg:py-8">
          <div className="mb-8">
            <p className="text-xs md:text-sm">
              Embark on a professional learning journey, toilored to your
              aspirations at our cutting-edge edtech platform.
            </p>
          </div>
          <div className="mb-3">
            {schools.map(({ key, name, description }) => (
              <div
                key={key}
                className="flex flex-col gap-2 mb-4 tracking-wider"
              >
                <h3 className="text-lg md:text-xl font-bold">{name}</h3>
                <p className="text-xs md:text-sm">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 px-4 py-3 flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
