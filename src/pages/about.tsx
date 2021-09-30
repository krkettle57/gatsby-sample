import { PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.VFC<PageProps> = () => (
  <Layout>
    <Seo title="About" description="当ブログについて" />
    <h1>About</h1>
  </Layout>
);

export default AboutPage;
