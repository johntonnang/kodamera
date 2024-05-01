import Articles from './components/Articles';
import Hero from './components/Hero';

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Articles />
      </main>
    </>
  );
}
