import Link from 'next/link';
import Image from 'next/image';
import { getPage } from '@/sanity/sanity.query';
import { PageType } from '@/types';

export default async function Hero() {
  const pageData: PageType[] = await getPage();

  return (
    <>
      {pageData.map((data) => (
        <section key={data._id}>
          <div className="mb-12 flex flex-col gap-6">
            <h1 className="text-60 leading-120 w-3/4 font-medium tracking-tight">
              {data.title}
            </h1>
            <p className="text-20 w-1/2">{data.description}</p>
          </div>
          <Link className="main-btn mb-16" href={`${data.contactButton.url}`}>
            {data?.contactButton.label}
          </Link>
          <Image
            width={400}
            height={400}
            priority={true}
            alt={data.headerImage.alt}
            src={data.headerImage.image}
            className="mb-24 h-full w-full object-cover"
          />
          <Link
            className="text-24 text-dark-blue font-semibold"
            href={`/articles`}
          >
            {data?.subheading}
          </Link>
        </section>
      ))}
    </>
  );
}
