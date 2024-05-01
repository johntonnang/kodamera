import Link from 'next/link';
import Image from 'next/image';
import { getArticles } from '@/sanity/sanity.query';
import { ArticleType } from '@/types';
import { formatDate } from '@/utils/formatDate';

export default async function Articles() {
  const articlesData: ArticleType[] = await getArticles();

  const topArticles = articlesData.slice(0, 3);

  return (
    <section className="flex w-full flex-col gap-6 xl:flex-row">
      <div className="w-full xl:w-1/2">
        {topArticles[0] && (
          <article key={topArticles[0]?._id}>
            <Link
              className="flex flex-col gap-8"
              href={`/articles/${topArticles[0]?.slug.current}`}
            >
              <div className="h-[200px] w-full overflow-hidden md:h-[276px] xl:h-[276px]">
                <Image
                  alt={topArticles[0]?.image.alt}
                  src={topArticles[0]?.image.image}
                  width={596}
                  height={276}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-main-grey text-14 font-semibold">
                  {topArticles[0]?.author.name} •{' '}
                  {formatDate(topArticles[0]?.date)}
                </p>
                <h2 className="text-18 font-semibold">
                  {topArticles[0]?.name}
                </h2>
                <p className="text-main-grey">{topArticles[0]?.preamble}</p>
              </div>
            </Link>
          </article>
        )}
      </div>
      <div className="flex w-full flex-col gap-6 xl:w-1/2">
        {topArticles.slice(1).map((article) => (
          <article key={article?._id}>
            <Link
              className="flex h-full w-full flex-col gap-4 xl:h-[200px] xl:flex-row"
              href={`/articles/${article?.slug.current}`}
            >
              <div className="h-[200px] w-full overflow-hidden md:h-[276px] xl:h-[200px]">
                <Image
                  alt={article?.image.alt}
                  src={article?.image.image}
                  width={320}
                  height={200}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <p className="text-main-grey text-14 font-semibold">
                  {article?.author.name} • {formatDate(article?.date)}
                </p>
                <h2 className="text-18 w-[90%] font-semibold">
                  {article?.name}
                </h2>
                <p className="text-main-grey">{article?.preamble}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
