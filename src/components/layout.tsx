/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Header from "./header";

type LayoutProps = { children: React.ReactNode[] };

const Layout: React.VFC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data?.site?.siteMetadata?.title || "Title"} />
      <div className="container mx-auto px-16 py-8 max-w-screen-lg prose bg-white">
        <main>{children}</main>
        <footer className="mt-6">
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
