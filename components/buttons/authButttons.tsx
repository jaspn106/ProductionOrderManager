"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const GoogleSignInButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <button type="button" onClick={() => signOut({ callbackUrl: "/" })}>
        Sign Out
      </button>
    );
  } else {
    return (
      <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        Sign In with Google
      </button>
    );
  }
};
