import "../styles/globals.scss";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Head>
        <title>Karanjot Singh</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/images/me.svg" />

        {/* Meta Tags */}
        {/* Primary Meta Tags */}
        <meta name="title" content="Karanjot Singh" />
        <meta
          name="description"
          content="I am Karanjot Singh, a student, developer and a tech enthusiast. I'm a python and web developer."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karanjotsingh.com" />
        <meta property="og:title" content="Karanjot Singh" />
        <meta
          property="og:description"
          content="I'm Karanjot Singh, I'm a Python and a Web Developer..."
        />
        <meta property="og:image" content="/images/metaPreview.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karanjotsingh.com" />
        <meta property="twitter:title" content="Karanjot Singh" />
        <meta
          property="twitter:description"
          content="I'm Karanjot Singh, I'm a Python and a Web Developer..."
        />
        <meta property="twitter:image" content="/images/metaPreview.png" />
        {/* Meta Tags End */}
      </Head>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
