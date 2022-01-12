import React from "react";
import { Navbar } from "./Navbar";
import Container from "./util/Container";
import Button from "./util/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Base.module.scss";

export default function Base({ page, contact = true, children }) {
  const router = useRouter();

  return (
    <div className={styles.bg}>
      <div className={styles.main}>
        <div className={`main-container`}>
          <Navbar current={page} />
          <div className={styles.navBack} />

          {children}

          <Container
            className={`${styles.contact} ${contact ? null : styles.hide}`}
            id="contact"
            color="white"
            bg="black"
          >
            <div className={styles.socialsDiv}>
              <h2>Wanna know more about me?</h2>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/_karanjot_s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/instagram.svg" alt="insta" />
                </a>
                <a
                  href="https://www.facebook.com/karanjot.singh.1217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/facebook.svg" alt="fb" />
                </a>
                <a
                  href="https://twitter.com/_karanjot_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/twitter.svg" alt="twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/karanjot-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/linkedin.svg" alt="linkedin" />
                </a>
                <a
                  href="https://github.com/karanjot-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/github.svg" alt="github" />
                </a>
                <a
                  href="mailto:karanjot2409@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/mail.svg" alt="mail" />
                </a>
              </div>
            </div>
            <Button
              color="black"
              bg="yellow"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact me
            </Button>
          </Container>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Karanjot Singh</h2>
          <Link href="#">Scroll to top</Link>
        </div>
      </footer>
    </div>
  );
}
