import React from "react";
import styles from "../../styles/Button.module.scss";

export default function Button({
  bg,
  color,
  children,
  onClick,
  className,
  bgClassName,
  isIcon,
  isRounded,
}) {
  return (
    <div
      className={`${styles.bg} bg-d-${bg} ${isRounded ? styles.round : ""} ${
        isIcon ? styles.icon : ""
      } ${bgClassName}`}
    >
      <button
        className={`${styles.btn} bg-${bg} ${color} ${
          isIcon ? styles.icon : ""
        } ${isRounded ? styles.round : ""} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
