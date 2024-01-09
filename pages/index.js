import react from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import useApi from "../hooks/useApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { error, loading, following } = useSelector((state) => state.following);

  const dispatch = useDispatch();
  // const [repos, getRepos, error] = useApi();
  // useEffect(() => {
  //   console.log(repos);
  //   getFollowing("hassanElgallouchi");
  //   console.log(repos, error);
  // }, []);
  return (
    <>
      <Head>
        <title>Github Profile details</title>
        <meta name="description" content="See more github profile details" />
        <link rel="icon" href="/user.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h2 className="">Home</h2>
          <div className={styles.home_top}>
            <h4 className="">Updates</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              asperiores minus quae, necessitatibus, ipsum perferendis ullam
              perspiciatis blanditiis, aperiam nesciunt ratione laudantium
              sapiente atque reiciendis. Esse, assumenda repellendus!
              Distinctio, ab.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
