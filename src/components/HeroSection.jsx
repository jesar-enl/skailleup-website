import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-s-blue h-['700px'] flex flex-col md:flex-row justify-between gap-4 text-white">
      <div className="flex flex-col justify-center m-8 p-8 shadow-lg h-96 md:h-auto md:w-1/2">
        <div className="flex justify-between">
          <Image
            src="/images/dddynamite-61.svg"
            width={50}
            height={50}
            alt="dynamite"
          />
          <Image
            src="/images/dddynamite-61.svg"
            width={50}
            height={50}
            alt="dynamite"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Your Learning Path to Endless growth!
          </h1>
          <p>
            Elevate your skills, ignite your curiosity, and embrace a futer of
            continuous learning. Start your path to success today!
          </p>
        </div>
        <div className="mt-2 px-4 py-2">
          <button
            type="button"
            className="text-white bg-green-500 py-2 rounded-lg px-4 font-semibold"
          >
            Start learning today!
          </button>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/graduation_hat.svg"
            width={50}
            height={50}
            alt="graduation-hat"
          />
        </div>
      </div>
      <div className="flex md:h-auto w-full md:w-1/2">
        <Image
          src="/images/medium-shot-man-posing-with-graduation-background__2.png"
          alt="image 1"
          width={800}
          height={600}
          layout='responsive'
        />
      </div>
    </section>
  )
}
