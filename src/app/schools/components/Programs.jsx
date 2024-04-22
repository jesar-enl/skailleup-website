'use client';
import { business } from '@/app/cardData';
import Image from 'next/image';
import Link from 'next/link';
import { LuCode2 } from 'react-icons/lu';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function Arrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%',
        background: '#000e5c',
      }}
      onClick={onClick}
    />
  );
}

export default function Programs() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col m-4 p-4 gap-4">
      <h1 className="text-xl md:text-3xl text-s-blue font-semibold tracking-wide mb-1">
        Our Programs
      </h1>
      <hr className="h-px bg-s-text border-0" />
      <div className="slider-container gap-2 mt-3 w-full m-auto">
        <Slider {...settings}>
          {business.map(({ name, src, href }) => {
            return (
              <div
                className="flex flex-col justify-between items-center mt-6 bg-white shadow-md bg-clip-border rounded-xl border border-s-blue h-full"
                key={name}
              >
                <div className="p-6 flex gap-3 ">
                  <LuCode2 className="text-s-white bg-s-blue rounded-full p-1 text-2xl" />
                  <h5 className="block mb-2 text-base antialiased font-semibold leading-snug tracking-normal text-s-blue">
                    {name}
                  </h5>
                </div>
                <div className="overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40 h-full">
                  <Image src={src} alt={name} width={800} height={700} />
                </div>
                <div className="flex flex-col justify-between h-full mt-6">
                  <div className="p-6 pt-0 flex justify-end">
                    <Link href={href}>
                      <button
                        type="button"
                        className="align-bottom select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-full border border-s-green text-s-blue shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      >
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
