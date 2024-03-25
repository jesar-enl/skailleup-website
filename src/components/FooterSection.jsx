import React from 'react'
import {
  company,
  policies,
  resources,
  schools,
  topRatedCourses,
} from '@/app/menuItems';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="flex flex-col w-full bg-s-blue text-gray-200 ">
      <div className="flex p-3 pl-4 pr-4 border-2 my-3 mx-4 border-t-slate-700 border-b-slate-700 border-l-s-blue border-r-s-blue">
        <div className="w-1/2 md:w-1/3 flex flex-col justify-between border-2 border-t-s-blue border-b-s-blue border-l-s-blue border-r-slate-700 mr-3">
          <div className="italic flex flex-col text-sm md:text-base">
            <span>info@gmail.com</span>
            <span>000 000 0000</span>
            <span>Dubai, UAE</span>
          </div>
          <div className="inline-block">
            <Link href="/" className="flex items-center">
              <Image
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
                src="/images/skaille-2.png"
                alt="image 2"
              />
              <p className="text-white text-lg font-medium  tracking-wide">
                Skailleup
              </p>
            </Link>
          </div>
        </div>
        <div className="w-1/2 md:w-2/3 flex flex-col">
          <div className="flex flex-col md:flex-row pb-3 border-2 border-t-s-blue border-b-slate-700 border-l-s-blue border-r-s-blue mb-3">
            <div className="w-full md:w-1/3 border-2 border-t-s-blue border-b-s-blue border-l-s-blue border-r-slate-700 mr-3">
              <h1 className="text-lg md:text-xl font-bold pb-4">Our Schools</h1>
              <ul className="text-xs md:text-sm mb-2 pl-3 block antialiased font-light leading-relaxed text-inherit">
                {schools.map(({ name, href }) => {
                  return (
                    <li key={href}>
                      <Link href={href}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full md:w-1/3 border-2 border-t-s-blue border-b-s-blue border-l-s-blue border-r-slate-700 mr-3">
              <h1 className="text-lg md:text-xl font-bold pb-4">Company</h1>
              <ul className="text-xs md:text-sm mb-2 pl-3 block antialiased font-light leading-relaxed text-inherit">
                {company.map(({ link, href, id }) => {
                  return (
                    <li key={id}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h1 className="text-lg md:text-xl font-bold pb-4">Resources</h1>
              <ul className="text-xs md:text-sm mb-2 pl-3 block antialiased font-light leading-relaxed text-inherit">
                {resources.map(({ link, href, id }) => {
                  return (
                    <li key={id}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-3 border-2 border-t-s-blue border-b-slate-700 border-l-s-blue border-r-s-blue mb-3">
            <div className="w-full md:w-1/3 border-2 border-t-s-blue border-b-s-blue border-l-s-blue border-r-slate-700 mr-3">
              <h1 className="text-lg md:text-xl font-bold pb-4">Policies</h1>
              <ul className="text-xs md:text-sm mb-2 pl-3 block antialiased font-light leading-relaxed text-inherit">
                {policies.map(({ link, href, id }) => {
                  return (
                    <li key={id}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-lg md:text-xl font-bold pb-4">Top Rated Courses</h1>
              <ul className="text-xs md:text-sm pl-3 mb-2 block antialiased font-light leading-relaxed text-inherit">
                {topRatedCourses.map(({ link, href, id }) => {
                  return (
                    <li key={id}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-3 border-2 border-t-s-blue border-b-slate-700 border-l-s-blue border-r-s-blue mb-3">
            <div className="w-full md:w-1/3 border-2 border-t-s-blue border-b-s-blue border-l-s-blue border-r-slate-700 mr-3">
              <Link href="#">Twitter</Link>
            </div>
            <div className="w-full md:w-2/3">
              <Link href="#">Facebook</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-3">
            <div className="w-full md:w-1/3 border-2 border-t-s-blue border-b-s-blue border-l-s-blue border-r-slate-700 mr-3">
              <Link href="#">Instagram</Link>
            </div>
            <div className="w-full md:w-2/3">
              <Link href="#">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 antialiased font-light leading-relaxed text-inherit">
        &copy; Copyright reserved {new Date().getFullYear()}
      </div>
    </footer>
  );
}
