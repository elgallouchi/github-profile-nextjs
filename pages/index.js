import react from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../Store/followersSlice";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  const { error, loading, followers } = useSelector((state) => state.followers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("repos");
    dispatch(getFollowers());
    console.log(followers, error, loading);
    !loading && console.log(followers);
  }, []);
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

          <div className={styles.users}>
            {!loading &&
              followers.slice(0, 7).map((user, index) => (
                <div key={index} className={styles.user}>
                  <div className={styles.header}>
                    <Link
                      className={styles.userlink}
                      href={`/profile?q=${user.login}`}
                    >
                      <img className={styles.avatar} src={user.avatar_url} />
                      <h5 className={styles.name}>{user.login}</h5>
                    </Link>
                    <span>started following you</span>
                  </div>
                  <div className={styles.footer}>
                    <Link
                      href="/profile?q=elgallouchi"
                      className={styles.footer_link}
                    >
                      <img
                        className={styles.footer_avatar}
                        src="https://avatars.githubusercontent.com/u/67022915?v=4"
                        alt=""
                      />
                      <h5 className={styles.footer_name}>elgallouchi</h5>
                    </Link>
                    <button className={styles.footer_button}>Follow</button>
                  </div>
                </div>
              ))}
            <a
              href="https://github.com/elgallouchi?tab=followers"
              className={styles.more_button}
              target="_blank"
            >
              More
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
