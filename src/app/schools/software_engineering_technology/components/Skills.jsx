import Image from 'next/image';

export default function Skills() {
  const images = [
    '/images/adobe_photoshop.png',
    '/images/figma.jpeg',
    '/images/sketch.jpeg',
    '/images/adobe_experience.jpeg',
    '/images/adobe_illustrator.jpeg',
  ];
  return (
    <div className="flex flex-col items-center justify-center text-s-blue p-6 gap-4">
      <h1 className="text-lg md:text-3xl font-semibold tracking-wide mb-6">
        Technical & Leadership skills
      </h1>
      <p className="text-sm md:text-base tracking-wider leading-snug text-center text-gray-800">
        At the School of Software and Technology, you will not only acquire a
        solid foundation in technical expertise but also develop essential
        leadership skills that are in today&#39;s dynamic professional
        landscape. Our comprehensive curriculum is designed to provide you with
        a well-rounded education that goes beyond technical proficiency,
        empowering you to take on leadership roles and excel in collaborative
        environments.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt="skills"
            width={100}
            height={100}
            className="bg-gray-100 p-3 rounded-lg shadow-lg shadow-slate-400"
          />
        ))}
      </div>
    </div>
  );
}
