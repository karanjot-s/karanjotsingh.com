import React from "react";
import styles from "../../styles/Container.module.scss";

const Container = ({ color, bg, className, id, children, Contref }) => {
  return (
    <div
      className={`${styles.cont} bg-${bg}-cont ${color} ${className}`}
      id={id}
      ref={Contref}
    >
      {children}
    </div>
  );
};

export default Container;
