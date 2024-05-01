import Link from 'next/link';
import { getContact } from '@/sanity/sanity.query';
import { ContactType } from '@/types';

export default async function Contact() {
  const contactData: ContactType[] = await getContact();

  return (
    <>
      {contactData.map((data) => (
        <section key={data?._id}>
          <div className="mb-8 flex flex-col gap-4 lg:mb-12 lg:gap-6">
            <h1 className="text-36 lg:text-60 leading-120 w-full font-medium tracking-tight lg:w-4/5">
              {data?.title}
            </h1>
            <p className="text-18 lg:text-20 w-full lg:w-1/2">
              {data?.description}
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-12">
            <ul>
              <li>
                <Link
                  className="text-24 text-dark-blue font-semibold hover:opacity-70"
                  href={`mailto:${data?.email}`}
                >
                  {data?.email}
                </Link>
              </li>
              <li>
                <Link
                  className="text-24 text-dark-blue font-semibold hover:opacity-70"
                  href={`tel:${data?.phone}`}
                >
                  {data?.phone}
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-12">
              {data?.socialLinks.map((socialLink, index) => (
                <li key={index}>
                  <Link
                    className="text-24 text-dark-blue font-semibold hover:opacity-70"
                    href={socialLink?.url}
                  >
                    {socialLink?.platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
