import React from "react";
import styles from "../../styles/Container.module.scss";

const Container = ({ color, bg, className, children }) => {
  return (
    <div className={`${styles.cont} bg-${bg}-cont ${color} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
