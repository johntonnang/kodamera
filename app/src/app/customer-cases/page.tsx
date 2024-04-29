import Link from 'next/link';
import Image from 'next/image';
import { getPage } from '@/sanity/sanity.query';
import { PageType } from '@/types';

export default async function CustomerCases() {
  const pageData: PageType[] = await getPage();

  return (
    <>
      {pageData.map((data) => (
        <section key={data._id}>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <Link href={`/${data?.contactButton.url}`}>
            {data?.contactButton.label}
          </Link>
          <Link href={`/articles`}>{data?.subheading}</Link>
        </section>
      ))}
    </>
  );
}
