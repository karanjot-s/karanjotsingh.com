import React, { useEffect, useRef } from "react";
import styles from "../styles/UnderConstruction.module.scss";
import { useRouter } from "next/router";

export default function UnderConstruction() {
  const router = useRouter();
  const front = useRef();
  const back = useRef();

  const handleMouse = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    var distX = window.innerWidth / 2 - x;
    var distY = window.innerHeight / 2 - y;

    var percenX = distX / window.innerWidth;
    var percenY = distY / window.innerHeight;

    front.current.style.transform = `translate(${percenX}%, ${percenY}%)`;
    back.current.style.transform = `translate(${percenX * 1.5}%, ${
      percenY * 1.5
    }%)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  });

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src="/images/construction-back.svg"
            alt="Under Construction"
            ref={back}
          />
          <img
            src="/images/construction-front.svg"
            alt="Under Construction"
            ref={front}
          />
        </div>
        <h2>Page Under Construction</h2>
        <div className={styles.btns}>
          <button
            onClick={() => {
              router.back();
            }}
          >
            Go Back
          </button>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
