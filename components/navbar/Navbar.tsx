import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
// components
import { GoogleSignInButton } from "@/components/buttons/authButttons";
import Image from "next/image";
import logo from "~images/logo.png";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export default function Navbar(props: unknown) {
  return (
    <div className={styles.container}>
      <Link href="/dashboard" className={styles.logo}>
        Production Order Tracker
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <GoogleSignInButton />
      </div>
    </div>
  );
}
