import Link from 'next/link';
import Image from 'next/image';
import { getHero } from '@/sanity/sanity.query';
import { HeroType } from '@/types';
import React from 'react';

type TitleProps = {
  text: string;
  emphasizeIndex: number;
};

export const Title = ({ text, emphasizeIndex }: TitleProps) => {
  const words = text.split(' ');

  const preEmphasis = words.slice(0, emphasizeIndex).join(' ');
  const emphasizedWord = words[emphasizeIndex];
  const postEmphasis = words.slice(emphasizeIndex + 1).join(' ');

  return (
    <h1 className="text-36 lg:text-60 leading-120 w-full font-medium tracking-tight lg:w-4/5">
      {preEmphasis}{' '}
      <span className="inline-block underline decoration-4 underline-offset-8">
        {emphasizedWord}
      </span>{' '}
      {postEmphasis}
    </h1>
  );
};

export default async function Hero() {
  const heroData: HeroType[] = await getHero();

  return (
    <>
      {heroData.map((data) => (
        <section key={data?._id}>
          <div className="mb-8 flex flex-col gap-4 lg:mb-12 lg:gap-6">
            <Title text={data?.title} emphasizeIndex={3} />
            <p className="text-18 lg:text-20 w-full lg:w-1/2">
              {data?.description}
            </p>
          </div>
          <Link
            className="main-btn mb-12 lg:mb-16"
            href={`${data?.contactButton.url}`}
          >
            {data?.contactButton.label}
          </Link>
          <Image
            width={1216}
            height={516}
            priority
            alt={data?.headerImage.alt}
            src={data?.headerImage.image}
            className="mb-[72px] h-[240px] w-full object-cover lg:mb-24 lg:h-[516px]"
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
