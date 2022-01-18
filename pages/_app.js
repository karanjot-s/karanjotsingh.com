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
        <title>Karanjot Singh - API</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="icon" type="image/x-icon" href="/images/me.svg" />
      </Head>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
