'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import { menuItems, schools } from '../menuItems';

export default function Navigationbar() {
  return (
    <Navbar disableAnimation isBordered className="bg-blue-950 h-20">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              width={68}
              height={68}
              className="w-[68px] h-[68px]"
              src="/images/skaille-2.png"
              alt="image 2"
            />
            <p className="text-white text-2xl font-medium font-['Urbanist'] tracking-wide">
              Skailleup
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="mr-12">
          <Link href="/">
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
        </NavbarBrand>
        <Dropdown>
          <NavbarItem className="text-white text-base font-normal font-['Open Sans'] tracking-tight">
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-base font-normal font-['Open Sans'] tracking-tight"
                radius="sm"
                variant="light"
              >
                Schools
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Schools at Skailleup"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            {schools.map((school) => {
              return (
                <DropdownItem
                  key={school.key}
                  className="self-stretch h-[35px] pl-[9px] pr-2 pt-2.5 pb-[9px] shadow justify-center items-center inline-flex"
                >
                  <Link
                    className="text-xs font-normal font-['Open Sans'] tracking-tight"
                    href={school.href}
                  >
                    {school.name}
                  </Link>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            className="text-white text-base font-normal font-['Open Sans'] tracking-tight"
            href="/admissions"
          >
            Admissions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white text-base font-normal font-['Open Sans'] tracking-tight"
            href="/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white text-base font-normal font-['Open Sans'] tracking-tight"
            href="/resources"
          >
            Resources
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white text-base font-normal font-['Open Sans'] tracking-tight"
            href="/media"
          >
            Media
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem className="w-[120px] h-10 absolute rounded-[20px] border border-emerald-500 justify-start items-center gap-12 inline-flex bg-blue-950">
          <Link
            className="text-center text-white text-sm font-medium font-['Roboto'] leading-tight tracking-tight grow shrink basis-0 self-stretch px-6 py-2.5 rounded-[20px] justify-center items-center gap-2 flex"
            href="/register"
          >
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-blue-950">
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-base font-normal font-['Open Sans'] tracking-tight"
                radius="sm"
                variant="light"
              >
                Schools
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="Schools at Skailleup"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            {schools.map((school) => {
              return (
                <DropdownItem
                  key={school.key}
                  className="self-stretch h-[35px] pl-[9px] pr-2 pt-2.5 pb-[9px] shadow justify-center items-center inline-flex"
                >
                  <Link
                    className="text-xs font-normal font-['Open Sans'] tracking-tight"
                    href={school.href}
                  >
                    {school.name}
                  </Link>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-white text-base font-normal font-['Open Sans'] tracking-tight"
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="w-[120px] h-10 rounded-[20px] border border-emerald-500 items-center gap-12">
          <Link
            className="text-center text-white text-sm font-medium font-['Roboto'] leading-tight tracking-tight grow shrink basis-0 self-stretch px-6 py-2.5 rounded-[20px] justify-center items-center gap-2 flex"
            href="/register"
          >
            Sign Up
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
