import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Container from "./util/Container";
import Button from "./util/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = (props) => {
  const current = props.current;
  const router = useRouter();
  const [navShown, setNavShown] = useState(false);

  const navBarList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Tutorials",
      link: "/tutorials",
    },
  ];

  function showNav() {
    setNavShown(true);
  }

  function hideNav() {
    setNavShown(false);
  }

  return (
    <div className={styles.navCont} ref={props.divRef}>
      <Container
        className={`${styles.nav} ${navShown ? styles.navListShown : ""}`}
        color="white"
        bg="green"
      >
        <Link href="/">
          <span className={styles.logo}>KARANJOT SINGH</span>
        </Link>

        <div className={`${styles.navList}`}>
          <ul>
            {navBarList.map((item, index) => {
              return (
                <li
                  className={`${styles.navItem} ${
                    current === item.name.toLowerCase() ? styles.active : ""
                  }`}
                  key={index}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}

            <li className={`${styles.navItem} ${styles.btnBg}`}>
              <a href="#contact">
                <Button bg="yellow" color="black" isIcon className={styles.btn}>
                  <img src="/phoneIcon.svg" alt={"contact"} />
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div
        className={`${styles.navBtn} bg-green-cont ${
          navShown ? styles.navShown : ""
        }`}
        onClick={navShown ? hideNav : showNav}
      >
        <div className={styles.navIcon} />
      </div>
    </div>
  );
};
