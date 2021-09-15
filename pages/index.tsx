import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h2>Pages</h2>
      <Link href="/counter">Counter</Link>
      <Link href="/kanye">Kanye Quotes</Link>
      <a href="https://nextjs.org/docs">
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </>
  );
};

export default Home;
