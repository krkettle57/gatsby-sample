/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Header from "./header";
import "./layout.css";

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
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0 1.0875rem 1.45rem",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: "2rem",
          }}
        >
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;