import { useEffect, useState, useRef } from "react";
import SidebarDetail from "../../../shared/sidebar-detail";
import type { Character } from "~/types";
import CharacterCard from "~/components/shared/character-card";
import { useParams } from "@remix-run/react";

const Search = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<
    Character | undefined
  >(undefined);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    setError(false);
    setLoading(true);

    fetch(`https://swapi.dev/api/people/?search=${encodeURIComponent("")}`)
      .then((response) => response.json())
      .then(({ results }) => {
        setCharacters(results);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const sidebarCharacterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sidebarCharacterRef?.current) {
      sidebarCharacterRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [selectedCharacter]);

  return (
    <div className={`Search${selectedCharacter ? "-with-sidebar" : ""}`}>
      <main>
        <div>
          <section>
            <span className="Search__heading">Search results:</span>
            <span className="Search__description">
              Click on a character to view more information about them.
            </span>
          </section>
          <section className="Search__character-list">
            {loading && <span className="loading">Loading results...</span>}
            {error && (
              <span className="error">
                Oops! An error occurred while conducting the search. Please try
                again later.
              </span>
            )}
            {characters?.length === 0 && loading === false && (
              <span className="error">
                No results found. Please try another query.
              </span>
            )}
            {characters?.map((c, i) => (
              <CharacterCard
                key={i}
                name={c.name}
                onSelect={() =>
                  setSelectedCharacter(
                    selectedCharacter?.url === c.url ? undefined : c
                  )
                }
                isSelected={selectedCharacter?.url === c.url}
                tabIndex={i}
              />
            ))}
          </section>
        </div>
      </main>
      {selectedCharacter && (
        <div ref={isMobile ? sidebarCharacterRef : null}>
          <SidebarDetail
            name={selectedCharacter.name}
            homeworld={selectedCharacter.homeworld}
            items={[
              { label: "Gender", value: selectedCharacter.gender },
              { label: "Birth Year", value: selectedCharacter.birth_year },
              { label: "Height", value: selectedCharacter.height },
            ]}
            profile={selectedCharacter.url}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
