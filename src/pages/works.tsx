import { PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const WorksPage: React.VFC<PageProps> = () => (
  <Layout>
    <Seo title="Works" description="これまでの成果物" />
    <h1>Works</h1>
  </Layout>
);

export default WorksPage;
