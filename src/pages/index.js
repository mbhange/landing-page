import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import dynamic from "next/dynamic";
const Features = dynamic(() => import("../components/Features"), {
  ssr: false,
});
const CTA = dynamic(() => import("../components/CTA"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta
          name="description"
          content="Responsive Landing Page using Next.js, Bootstrap 5, and SCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />
      <Hero />
      <Features />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
