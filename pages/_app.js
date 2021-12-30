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
      </Head>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
