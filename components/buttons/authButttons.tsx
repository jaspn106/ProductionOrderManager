"use client";

import Image from "next/image";
import googleLogo from "~images/google.png";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./buttons.module.css";

export function GoogleSignInButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        type="button"
        className={styles.googleButton}
        onClick={() => signOut({ callbackUrl: "/" })}>
        Sign Out
      </button>
    );
  } else {
    return (
      <button
        className={styles.googleButton}
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        Sign In with Google
      </button>
    );
  }
}
