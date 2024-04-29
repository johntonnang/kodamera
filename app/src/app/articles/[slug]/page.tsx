import { PortableText } from '@portabletext/react';
import { SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/sanity.client';
import Link from 'next/link';

const ARTICLE_QUERY = `*[
    _type == "article" &&
    slug.current == $slug
  ][0]{
  ...,
}`;

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await client.fetch<SanityDocument>(ARTICLE_QUERY, params);
  const { name, date, headline, image, details, articleType } = article;
  const articleDate = new Date(date).toDateString();
  const articleTime = new Date(date).toLocaleTimeString();

  return (
    <main className="min-h-screen w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-4">
          <Link href={`/`} prefetch>
            ← Tillbaka till startsidan
          </Link>
        </div>
        <div className="items-top grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              {articleType && (
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm capitalize dark:bg-gray-800">
                  {articleType.replace('-', ' ')}
                </div>
              )}
              {name && (
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {name}
                </h1>
              )}
              {headline?.name && (
                <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                  <div className="flex items-start">
                    <p className="font-semibold">Artist</p>
                  </div>
                  <div className="grid gap-1">
                    <dt>{headline?.name}</dt>
                  </div>
                </dl>
              )}
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <div className="flex items-start">
                  <p className="font-semibold">Date</p>
                </div>
                <div className="grid gap-1">
                  {articleDate && <p>{articleDate}</p>}
                </div>
              </dl>
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base"></dl>
            </div>
            {details && details.length > 0 && (
              <div className="prose max-w-none">
                <PortableText value={details} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
