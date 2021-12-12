import styles from "../styles/Intro.module.scss";
import {useEffect, useState} from "react";

function Cursor({blink}) {
    return blink ? (
        <span className={`${styles.cursor} ${styles.blink}`}>&nbsp;</span>
    ) : (
        <span className={styles.cursor}>&nbsp;</span>
    );
}

function Intro({className}) {
    const [text, setText] = useState("");
    const [blink, setBlink] = useState(true);
    const textArray = [
        "Hello;",
        "Bonjour;",
        "Hola;",
        "Hallo;",
        "Ciao;",
        "Salut;",
        "Hej;",
        "Szia;",
        "Namaste;",
        "Sawubona;",
        "Hej;",
        "Olá;",
        "Konnichiwa;",
        "Sat Sri Akal;",
    ];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 1500;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            setBlink(false);
            setText(
                (oldText) => oldText + textArray[textArrayIndex].charAt(charIndex)
            );
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setBlink(true);
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            setBlink(false);
            setText((oldText) => oldText.substring(0, charIndex - 1));
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            setBlink(true);
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    useEffect(() => {
        setTimeout(type, 500);
    }, []);

    return (
        <div className={`${styles.typedText} ${className}`}>
            <span>{text}</span>
            <Cursor blink={blink}/>
        </div>
    );
}

export default Intro;
