import React from "react";
import styles from "../styles/UnderConstruction.module.scss";
import { useRouter } from "next/router";

export default function UnderConstruction() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src="/images/construction.svg" alt="Under Construction" />
        <h2>Page Under Construction</h2>
        <div>
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
