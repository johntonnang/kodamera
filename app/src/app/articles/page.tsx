import Link from 'next/link';
import { getArticles } from '@/sanity/sanity.query';
import { ArticleType } from '@/types';

export default async function ArticlesPage() {
  const articlesData: ArticleType[] = await getArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Artiklar
      </h2>
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        {articlesData.map((article) => (
          <li
            className="event-card rounded-lg bg-white p-4 shadow-md dark:bg-gray-950"
            key={article._id}
          >
            <Link
              className="hover:underline"
              href={`/articles/${article.slug.current}`}
            >
              <h2 className="text-xl font-semibold">{article?.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {new Date(article?.date).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
