import Link from 'next/link';
import Image from 'next/image';
import { getMenu } from '@/sanity/sanity.query';
import { MenuType } from '@/types';

export default async function Menu() {
  const menuData: MenuType[] = await getMenu();

  return (
    <header className="fixed left-0 top-0 flex h-20 w-full bg-main-white px-20 py-6">
      {menuData.map((data) => (
        <nav
          key={data._id}
          className="flex w-full items-center justify-between px-8"
        >
          <div className="flex gap-10">
            <Link href={`/`}>
              <Image
                src={data.logo.image}
                width={144}
                height={144}
                alt={data.logo.alt}
              />
            </Link>
            <ul className="flex items-center gap-8">
              {data.links.map((link, index) => (
                <li key={index}>
                  <Link
                    className="font-medium hover:opacity-70"
                    href={`${link.url}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="secondary-btn" href={data.link.url}>
            {data.link.title}
          </Link>
        </nav>
      ))}
    </header>
  );
}
