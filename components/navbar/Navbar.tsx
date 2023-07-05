import Link from "next/link";
import React from "react";
// components
import { GoogleSignInButton } from "@/components/buttons/authButttons";
import Container from "../Container";
import Logo from "./logo";

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

const Navbar = () => {
  return (
    <div className="flex flex-row w-full fixed z-10 shadow-sm">
      <div className=" py-4 border-b-[1px]">
        <Container>
          <div className=" flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
          </div>
        </Container>
        {/* {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))} */}
        {/* <GoogleSignInButton /> */}
      </div>
    </div>
  );
};

export default Navbar;
