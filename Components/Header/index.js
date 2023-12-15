import React, { useEffect, useState } from "react";
import Styles from "../../styles/Header.module.css";
import Form from "../Form";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { repos, profileUser, loading } = useSelector((state) => state.profile);
  const router = useRouter();
  const { pathname } = router;
  const [isRoute, setIsRoute] = useState(false);
  useEffect(() => {
    setIsRoute(pathname === "/");
  }, [pathname]);

  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <h2 className={Styles.logo}>
          <Link href="/">Github Details</Link>
        </h2>

        <Form />
      </div>
    </header>
  );
}
