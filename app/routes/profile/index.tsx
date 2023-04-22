import type { V2_MetaFunction } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import Profile from "~/components/pages/content/profile";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Character Profile" }];
};

export default function ProfileRoute() {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
}
