'use client';

import { menuItems, schools } from '@/app/menuItems';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarSection() {
  return (
    <Navbar fluid rounded className="bg-s-blue">
      <Navbar.Brand href="https://flowbite-react.com">
        <Image
          width={64}
          height={64}
          className="w-[64px] h-[64px]"
          src="/images/skaille-2.png"
          alt="image 2"
        />
        <p className="text-s-white text-lg md:text-xl font-medium  tracking-wide">
          Skailleup
        </p>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        <Button className="bg-s-blue border border-s-green rounded-lg text-lg md:text-xl tracking-wide">
          Sign in
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Dropdown
          dismissOnClick={false}
          className="text-lg md:text-xl text-s-white"
          label="Schools"
          placement='bottom'
        >
          {schools.map(({ name, href, key }) => (
            <Dropdown.Item key={key} as={Link} href={href}>
              {name}
            </Dropdown.Item>
          ))}
        </Dropdown>
        {/* </Navbar.Link> */}
        {menuItems.map(({ name, href }) => (
          <Navbar.Link
            key={name}
            href={href}
            className="text-lg md:text-xl text-s-white"
          >
            {name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
