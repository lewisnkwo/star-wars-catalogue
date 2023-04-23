import type { V2_MetaFunction } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import Home from "~/components/pages/content/home";
import { useCharacters } from "~/swr";
import FilterBar from "~/components/shared/filter-bar";
import { useState } from "react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Star Wars Catalogue" }];
};

export default function Index() {
  const { loading, error, characters } = useCharacters();
  const [openFilterBar, setOpenFilterBar] = useState<boolean | undefined>(
    undefined
  );
  return (
    <Layout showFilterBar={() => setOpenFilterBar(true)}>
      <>
        <Home characters={characters} loading={loading} error={error} />
        <FilterBar
          isMenuOpen={openFilterBar}
          onMenuClose={() => setOpenFilterBar(false)}
        />
      </>
    </Layout>
  );
}
