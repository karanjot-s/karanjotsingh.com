import React, {useState} from "react";
import styles from "../styles/Navbar.module.scss";
import Container from "./util/Container";
import Button from "./util/Button";
import Link from "next/link";

export const Navbar = (props) => {
    const current = props.current;
    const [navShown, setNavShown] = useState(false);

    const navBarList = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Dev",
            link: "/dev"
        }
    ];

    function showNav() {
        setNavShown(true);
    }

    function hideNav() {
        setNavShown(false);
    }

    return (
        <div className={styles.navCont}>

            <Container className={`${styles.nav} ${navShown ? styles.navListShown : ""}`} color="white" bg="green">
                <Link href="/">
                    <span className={styles.logo}>KARANJOT SINGH</span>
                </Link>

                <div className={`${styles.navList}`}>
                    <ul>
                        {navBarList.map((item, index) => {
                            return (
                                <li
                                    className={`${styles.navItem} ${
                                        current === "home" ? styles.active : ""
                                    }`}
                                    key={index}
                                >
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            )
                        })}


                        <li className={`${styles.navItem} ${styles.btnBg}`}>
                            <Button bg="yellow" color="black" isIcon className={styles.btn}>
                                <img src="/phoneicon.svg" alt={"contact"}/>
                            </Button>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className={`${styles.navBtn} bg-green-cont ${navShown ? styles.navShown : ""}`}
                 onClick={navShown ? hideNav : showNav}>
                <div className={styles.navIcon}/>
            </div>
        </div>
    );
};
