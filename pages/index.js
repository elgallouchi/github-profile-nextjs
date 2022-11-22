import react from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import useApi from "../hooks/useApi";
import { useEffect } from "react";

export default function Home() {
  // const [repos, getRepos, error] = useApi();
  // useEffect(() => {
  //   console.log(repos);
  //   getRepos("hassanElgallouchi");
  //   console.log(repos, error);
  // }, []);
  return (
    <>
      <Head>
        <title>Github Profile details</title>
        <meta name="description" content="See more github profile details" />
        <link rel="icon" href="/user.png" />
      </Head>
      <main className={styles.main}>gh</main>
    </>
  );
}
