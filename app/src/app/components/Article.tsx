import Link from 'next/link';
import Image from 'next/image';
import { getArticles, getArticle } from '@/sanity/sanity.query';
import { ArticlePageType, ArticleType } from '@/types';
import { formatDate } from '@/utils/formatDate';

export default async function Article() {
  const articleData: ArticlePageType[] = await getArticle();
  const articlesData: ArticleType[] = await getArticles();

  return (
    <>
      {articleData.map((data) => (
        <section key={data?._id}>
          <div className="mb-8 flex flex-col gap-4 lg:mb-12 lg:gap-6">
            <h1 className="text-36 lg:text-60 leading-120 w-full font-medium tracking-tight lg:w-4/5">
              {data?.title}
            </h1>
            <p className="text-18 lg:text-20 w-full lg:w-1/2">
              {data?.description}
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            {articlesData.map((article) => (
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
      ))}
    </>
  );
}
