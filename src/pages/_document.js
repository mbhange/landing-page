import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload fonts */}
          <link
            rel="preload"
            href="/fonts/inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Meta tags for SEO */}
          <meta name="description" content="Landing page for our product" />
          <meta property="og:title" content="Landing Page for Our Product" />
          <meta charSet="utf-8" />
          <meta
            property="og:description"
            content="Explore our features and get started today."
          />
          <meta property="og:image" content="/images/hero.webp" />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
