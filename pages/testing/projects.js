import React from "react";
import Base from "../../components/Base";
import styles from "../../styles/testing/projects.module.scss";

export default function projectsTest() {
  return (
    <Base>
      <div className={styles.introBack}>
        <img src="/images/projectsbg.png" />
        <div className={styles.base} />
      </div>

      <div className={styles.intro}></div>
    </Base>
  );
}
