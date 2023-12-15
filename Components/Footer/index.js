import React from "react";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>⚠️ (*) The max repos retrieved from the server.</p>
      <div className={styles.container}>
        <ul className={styles.ul}>
          <p>
            © 2022{" "}
            <a href="https://elgallouchi.com" target="_blank">
              {" "}
              ElGallouchi.
            </a>
          </p>
          <li>
            <a
              href="https://www.linkedin.com/in/hassanelgallouchi"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://twitter.com/elgallouchi" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/elgallouchi" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
