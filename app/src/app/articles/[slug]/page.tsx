import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { formatDate } from '@/utils/formatDate';
import { getArticleBySlug } from '@/sanity/sanity.query';

type ArticlePageProps = {
  slug: string;
};

export default async function ArticlePage({
  params,
}: {
  params: ArticlePageProps;
}) {
  const { slug } = params;

  const article = await getArticleBySlug(slug);
  return (
    <main className="flex flex-col">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <h1 className="text-36 lg:text-60 leading-120 w-full font-medium tracking-tight">
            {article?.name}
          </h1>
          <div className="h-[200px] w-full overflow-hidden md:h-[276px] xl:h-[200px]">
            <Image
              alt={article?.image.alt}
              src={article?.image.image}
              width={320}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-main-grey text-14 font-semibold">
            {article?.author.name} • {formatDate(article?.date)}
          </p>
          <PortableText value={article?.details} />
        </div>
      </section>
    </main>
  );
}
