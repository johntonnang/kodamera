import { getMenu } from '@/sanity/sanity.query';
import { MenuType } from '@/types';
import { HamburgerMenu } from './HamburgerMenu';
import { Navbar } from './Navbar';

export default async function Menu() {
  const menuData: MenuType[] = await getMenu();

  return (
    <header className="fixed top-0 flex h-[72px] w-full max-w-screen-xl bg-main-white px-0 py-6 md:px-8 lg:h-20 xl:px-20">
      {menuData.map((data) => (
        <div
          key={data?._id}
          className="flex w-full items-center justify-between px-4 lg:px-8"
        >
          <HamburgerMenu
            logo={data?.logo}
            links={data?.links}
            ctaLink={data?.link}
          />
          <Navbar logo={data?.logo} links={data?.links} ctaLink={data?.link} />
        </div>
      ))}
    </header>
  );
}
