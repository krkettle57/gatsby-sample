import { Link } from "gatsby";
import * as React from "react";

type HeaderProps = {
  siteTitle: string;
};

const Header: React.VFC<HeaderProps> = ({ siteTitle = "" }) => (
  <header className="bg-purple-800 mb-4">
    <div className="lg:container mx-0 my-auto px-4 py-6 mb-4">
      <Link className="text-white no-underline" to="/">
        <h1 className="m-0">{siteTitle}</h1>
      </Link>
    </div>
  </header>
);

export default Header;
