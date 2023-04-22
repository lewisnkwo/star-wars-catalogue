import { useEffect, useState, useRef } from "react";
import SidebarDetail from "../../../shared/sidebar-detail";
import type { Character } from "~/types";
import CharacterCard from "./character-card";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<
    Character | undefined
  >(undefined);

  const sidebarCharacterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    setError(false);
    setLoading(true);

    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then(({ results }) => {
        setCharacters(results);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

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
    <div className={`Home${selectedCharacter ? "-with-sidebar" : ""}`}>
      <main>
        <div>
          <section>
            <span className="Home__heading">Latest characters</span>
            <span className="Home__description">
              Click on a character to view more information about them.
            </span>
          </section>
          <section className="Home__character-list">
            {loading && <span className="loading">Loading people...</span>}
            {error && (
              <span className="error">
                Oops! An error occurred while loading the characters. Please
                refresh and try again.
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
              { label: "Mass", value: selectedCharacter.mass },
            ]}
            profile={selectedCharacter.url}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
