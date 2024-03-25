import Image from 'next/image';

export default function Skailleup() {
  return (
    <div className="flex justify-between mt-4 mb-4 gap-4 ">
      <div className="flex flex-col justify-center items-center px-4 py-3 w-2/3 ml-8">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wider mb-3">
          Learn the SkailleUp way 🚀
        </h1>
        <p className="tracking-wider mb-3">
          In the SkailleUp way, education becomes a journey of discovery, marked
          by practical experiences and project-based learning. This approach is
          designed to enhance understanding, critical thinking not just
          receipients of information; they are active participants in their own
          learning process, gaining a deeper understanding of concepts through
          hands-on applications
        </p>
        <div className="flext justify-start mt-2 px-4 py-3">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Start Learning
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-3 w-1/2">
        <Image
          src="/images/african-girl.png"
          alt="african girl"
          height={240}
          width={240}
        />
      </div>
    </div>
  );
}
