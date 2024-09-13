import Link from "next/link";
import React from "react";

const links = [
  { href: "/chat", text: "Chat" },
  { href: "/tours", text: "tours" },
  { href: "/tours/new-tour", text: "New Tour" },
  { href: "/profile", text: "profile" },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="capitalize">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
