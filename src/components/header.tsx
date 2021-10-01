import { Link } from "gatsby";
import * as React from "react";
import Navbar from "./navbar";

type HeaderProps = {
  siteTitle: string;
};

const Header: React.VFC<HeaderProps> = ({ siteTitle = "" }) => (
  <header className="bg-primary">
    <div className="container flex items-center justify-center p-6 mx-auto border-white border-b-2 w-9/12 ">
      <Link className="no-underline" to="/">
        <span className="m-0 text-2xl text-white font-sans font-bold">
          {siteTitle}
        </span>
      </Link>
    </div>
    <Navbar />
  </header>
);

export default Header;
