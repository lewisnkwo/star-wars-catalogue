import type { V2_MetaFunction } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import Planet from "~/components/pages/content/planet";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Character Planet" }];
};

export default function PlanetRoute() {
  return (
    <Layout>
      <Planet />
    </Layout>
  );
}
