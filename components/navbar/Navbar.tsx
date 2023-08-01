import React from "react";
import styles from "@/styles/Navbar.module.css";
import UserMenu from "./UserMenu";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href={{ pathname: "/" }}
          >
            Korren
          </Link>
        </h1>
        <UserMenu />
      </div>
    </>
  );
};

export default Navbar;
