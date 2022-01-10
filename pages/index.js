import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>This page has a title 🤔</title>
        <meta property="og:site_name" content="San Roque 2014 Pollos" />
        <meta property="og:title" content="San Roque 2014 Pollos" />
        <meta property="og:description" content="Programa de fiestas" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://i.ytimg.com/vi/RNUZNIzSyBU/maxresdefault.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>

      <h1>This page has a title 🤔</h1>
    </div>
  );
}
