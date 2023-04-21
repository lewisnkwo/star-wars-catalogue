import type { V2_MetaFunction } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import Home from "~/components/pages/content/home";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Star Wars Catalogue" }];
};

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
