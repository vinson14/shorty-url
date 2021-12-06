import Head from "next/head";

const MetaData = () => {
  return (
    <Head>
      <title>Shorty URL</title>
      <meta name="description" content="A URL shortener created on NextJS Framework with an AWS Lambda backend" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaData;
