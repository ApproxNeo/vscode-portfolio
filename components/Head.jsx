import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Clement Neo is a techie playing with all kinds of tech all the time"
      />
      <meta
        name="keywords"
        content="clement neo"
      />
      <meta property="og:title" content="Clement Neo's Portfolio" />
      <meta
        property="og:description"
        content="A techie playing with tech"
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Clement Neo',
};
