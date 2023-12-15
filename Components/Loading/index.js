import React from "react";
import styles from "../../styles/loading.module.css";
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
