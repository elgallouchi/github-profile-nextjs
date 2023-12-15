import React, { useState } from "react";
import styles from "../../styles/Form.module.css";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/profile?q=${username}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <input
          type="search"
          id="search"
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Github Username"
        />
      </p>
      <p>
        <button>Search</button>
      </p>
    </form>
  );
}
