import * as React from "react";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

const NavLink: React.VFC<NavLinkProps> = ({ children, href }) => (
  <a
    href={href}
    className="text-white border-b-2 border-transparent hover:border-white mx-2 sm:mx-6"
  >
    {children}
  </a>
);

const Navbar: React.VFC = () => (
  <div className="container flex items-center justify-center p-6 mx-auto capitalize">
    <NavLink href="/">Home</NavLink>
    <NavLink href="/">Profile</NavLink>
    <NavLink href="/">Works</NavLink>
  </div>
);

export default Navbar;
