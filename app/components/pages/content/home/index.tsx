import { useEffect, useState, useRef } from "react";
import SidebarDetail from "../../../shared/sidebar-detail";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedCharacter, _setSelectedCharacter] = useState<{} | undefined>(
    undefined
  );

  const sidebarCharacterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
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
              Click on a character to view info on their planets
            </span>
          </section>
          <section className="Home__character-list"></section>
        </div>
      </main>
      {selectedCharacter && (
        <div ref={isMobile ? sidebarCharacterRef : null}>
          <SidebarDetail title="" subtitle="" items={[]} />
        </div>
      )}
    </div>
  );
};

export default Home;
