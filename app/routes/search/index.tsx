import type { V2_MetaFunction } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import Search from "~/components/pages/content/search";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Search Results" }];
};

export default function SearchRoute() {
  return (
    <Layout>
      <Search />
    </Layout>
  );
}
