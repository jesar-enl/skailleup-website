import {
  company,
  policies,
  resources,
  schools,
  topRatedCourses,
} from '@/app/menuItems';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-blue-950 text-gray-200 font-['Urbanist']">
      <div className="flex p-3 pl-4 pr-4 border-2 my-3 mx-4 border-t-slate-700 border-b-slate-700 border-l-blue-950 border-r-blue-950">
        <div className="w-1/3 flex flex-col justify-between border-2 border-t-blue-950 border-b-blue-950 border-l-blue-950 border-r-slate-700 mr-3">
          <div className="italic flex flex-col">
            <span>info@gmail.com</span>
            <span>000 000 0000</span>
            <span>Dubai, UAE</span>
          </div>
          <div className="inline-block">
            <Link href="/" className="inline-block">
              <Image
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
                src="/images/skaille-2.png"
                alt="image 2"
              />
              <p className="text-white text-xl font-medium font-['Urbanist'] tracking-wide">
                Skailleup
              </p>
            </Link>
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex pb-3 border-2 border-t-blue-950 border-b-slate-700 border-l-blue-950 border-r-blue-950 mb-3">
            <div className="w-1/3 border-2 border-t-blue-950 border-b-blue-950 border-l-blue-950 border-r-slate-700 mr-3">
              <h1 className="text-xl font-bold pb-4">Our Schools</h1>
              <ul className="text-sm pl-3 block antialiased font-light leading-relaxed text-inherit">
                {schools.map(({ name, href }) => {
                  return (
                    <li key={href}>
                      <Link href={href}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-1/3 border-2 border-t-blue-950 border-b-blue-950 border-l-blue-950 border-r-slate-700 mr-3">
              <h1 className="text-xl font-bold pb-4">Company</h1>
              <ul className="text-sm pl-3 block antialiased font-light leading-relaxed text-inherit">
                {company.map(({ link, href }) => {
                  return (
                    <li key={href}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-1/3">
              <h1 className="text-xl font-bold pb-4">Resources</h1>
              <ul className="text-sm pl-3 block antialiased font-light leading-relaxed text-inherit">
                {resources.map(({ link, href }) => {
                  return (
                    <li key={href}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex pb-3 border-2 border-t-blue-950 border-b-slate-700 border-l-blue-950 border-r-blue-950 mb-3">
            <div className="w-1/3 border-2 border-t-blue-950 border-b-blue-950 border-l-blue-950 border-r-slate-700 mr-3">
              <h1 className="text-xl font-bold pb-4">Policies</h1>
              <ul className="text-sm pl-3 block antialiased font-light leading-relaxed text-inherit">
                {policies.map(({ link, href }) => {
                  return (
                    <li key={href}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-2/3">
              <h1 className="text-xl font-bold pb-4">Top Rated Courses</h1>
              <ul className="text-sm pl-3 block antialiased font-light leading-relaxed text-inherit">
                {topRatedCourses.map(({ link, href }) => {
                  return (
                    <li key={href}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex pb-3 border-2 border-t-blue-950 border-b-slate-700 border-l-blue-950 border-r-blue-950 mb-3">
            <div className="w-1/3 border-2 border-t-blue-950 border-b-blue-950 border-l-blue-950 border-r-slate-700 mr-3">
              <Link href="#">Twitter</Link>
            </div>
            <div className="w-2/3">
              <Link href="#">Facebook</Link>
            </div>
          </div>
          <div className="flex pb-3">
            <div className="w-1/3 border-2 border-t-blue-950 border-b-blue-950 border-l-blue-950 border-r-slate-700 mr-3">
              <Link href="#">Instagram</Link>
            </div>
            <div className="w-2/3">
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
