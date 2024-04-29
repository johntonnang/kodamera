import Link from 'next/link';
import Image from 'next/image';
import { getArticles } from '@/sanity/sanity.query';
import { ArticleType } from '@/types';

export default async function Articles() {
  const articlesData: ArticleType[] = await getArticles();

  return (
    <section className="flex w-full">
      {articlesData.map((article) => (
        <div key={article._id} className="flex w-full">
          <Link href={`/articles/${article.slug.current}`}>
            <Image
              alt={article.image.alt}
              src={article.image.image}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
            <h2>{article?.name}</h2>
            <p>{new Date(article?.date).toLocaleDateString()}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}
