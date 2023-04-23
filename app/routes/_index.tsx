import type { V2_MetaFunction } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import Home from "~/components/pages/content/home";
import { useCharacters } from "~/swr";
import FilterBar from "~/components/shared/filter-bar";
import { useState } from "react";
import type { Character } from "~/types";
import { filterByGender, sortAscending, sortDescending } from "~/utils";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Star Wars Catalogue" }];
};

export default function Index() {
  const { loading, error, characters } = useCharacters();
  const [openFilterBar, setOpenFilterBar] = useState<boolean | undefined>(
    undefined
  );
  const [sortedAndFilteredCharacters, setSortedAndFilteredCharacters] =
    useState<Character[] | undefined>(undefined);

  return (
    <Layout showFilterBar={() => setOpenFilterBar(true)}>
      <>
        <Home
          characters={sortedAndFilteredCharacters ?? characters}
          loading={loading}
          error={error}
        />
        <FilterBar
          items={[
            {
              icon: "arrow-up-a-z",
              title: "Sort Ascending",
              tabIndex: 1,
              onSelect: () => {
                characters &&
                  setSortedAndFilteredCharacters(sortAscending(characters));
                setOpenFilterBar(false);
              },
            },
            {
              icon: "arrow-down-a-z",
              title: "Sort Descending",
              tabIndex: 2,
              onSelect: () => {
                characters &&
                  setSortedAndFilteredCharacters(sortDescending(characters));
                setOpenFilterBar(false);
              },
            },
          ]}
          isMenuOpen={openFilterBar}
          onFilterChange={(v) => {
            characters &&
              setSortedAndFilteredCharacters(filterByGender(characters, v));
            setOpenFilterBar(false);
          }}
          onMenuClose={() => setOpenFilterBar(false)}
        />
      </>
    </Layout>
  );
}
