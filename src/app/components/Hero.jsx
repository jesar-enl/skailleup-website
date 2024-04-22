import Image from 'next/image';

const Hero = () => {
  return (
    // TODO: more styling of the hero section

    <section className="bg-blue-950 h-['700px'] flex justify-between gap-4 font-['Urbanist'] text-white">
      <div className="flex flex-col justify-center m-8 p-8 shadow-lg h-96">
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
          <h1 className="text-3xl font-semibold">
            Your Learning Path to Endless growth!
          </h1>
          <p>
            Elevate your skills, ignite your curiosity, and embrace a futer of
            continuous learning. Start your path to success today!
          </p>
        </div>
        <div className="mt-2 px-4 py-3">
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
      <div className="flex">
        <Image
          src="/images/medium-shot-man-posing-with-graduation-background__2.png"
          alt="image 1"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
