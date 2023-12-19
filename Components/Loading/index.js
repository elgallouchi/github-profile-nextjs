import React from "react";
import styles from "../../styles/Loading.module.css";
export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.ldsring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
