'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoType, LinkType } from '@/types';

type HamburgerMenuProps = {
  logo: LogoType;
  links: LinkType[];
  ctaLink: LinkType;
};

export const HamburgerMenu = ({ logo, links, ctaLink }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <Link href="/">
        <Image src={logo?.image} width={144} height={26} alt={logo?.alt} />
      </Link>
      <button
        onClick={toggleMenu}
        className={`z-20 flex h-3 w-[18px] flex-col justify-between focus:outline-none ${isOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-full origin-left transform bg-black transition-transform duration-200 ${isOpen ? 'rotate-left' : ''}`}
        />
        <span
          className={`h-0.5 w-full bg-black transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-0.5 w-full origin-left transform bg-black transition-transform duration-200 ${isOpen ? 'rotate-right' : ''}`}
        />
      </button>
      <div
        className={`fixed inset-0 right-0 top-0 z-10 h-screen w-screen bg-main-white p-4 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="mb-4 flex flex-col gap-4 py-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="text-20 font-medium hover:opacity-70"
                href={link?.url}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="secondary-btn"
          href={ctaLink?.url}
          onClick={() => setIsOpen(false)}
        >
          {ctaLink?.title}
        </Link>
      </div>
    </div>
  );
};
