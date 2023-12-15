import React, { useEffect } from "react";
import styles from "../../styles/Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../Store/profileSlice";

export default function Profile({ profileUser, loading }) {
  // const { profileUser, loading } = useSelector((state) => state.profile);

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.header}></div>


        {loading ? (
          <>
            <img loading="lazy" src={"/imagenotfound.jpg"} alt={"walou"} />
            <div className={styles.footer}>
              <h3>unknown</h3>
              <h5>unknown</h5>
              <div className={styles.socials}>
                <div>
                  <h6>0</h6>
                  <span>Following</span>
                </div>
                <div>
                  <h6>0</h6>
                  <span>Followers</span>
                </div>
                <div>
                  <h6>0</h6>
                  <span>Repos</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              loading="lazy"
              src={profileUser?.avatar_url}
              alt={profileUser?.login}
            />
            <div className={styles.footer}>
              <h3>{profileUser?.login}</h3>
              <h5>{profileUser?.location}</h5>
              <div className={styles.socials}>
                <div>
                  <h6>{profileUser?.following}</h6>
                  <span>Following</span>
                </div>
                <div>
                  <h6>{profileUser?.followers}</h6>
                  <span>Followers</span>
                </div>
                <div>
                  <h6>{profileUser?.public_repos}</h6>
                  <span>Repos</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
