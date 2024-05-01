import Link from 'next/link';
import Image from 'next/image';
import { LogoType, LinkType } from '@/types';

type NavbarProps = {
  logo: LogoType;
  links: LinkType[];
  ctaLink: LinkType;
};

export const Navbar = ({ logo, links, ctaLink }: NavbarProps) => (
  <nav className="hidden w-full items-center justify-between lg:flex">
    <div className="flex gap-10">
      <Link href="/">
        <Image src={logo?.image} width={144} height={26} alt={logo?.alt} />
      </Link>
      <ul className="flex items-center gap-8">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="font-medium hover:opacity-70" href={link?.url}>
              {link?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Link className="secondary-btn" href={ctaLink?.url}>
      {ctaLink?.title}
    </Link>
  </nav>
);
