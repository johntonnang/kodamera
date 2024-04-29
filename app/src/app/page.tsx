import Articles from './components/Articles';
import Hero from './components/Hero';
import Menu from './components/Menu';

export default async function Home() {
  return (
    <>
      <Menu />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Articles />
      </main>
    </>
  );
}
