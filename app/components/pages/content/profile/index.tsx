import { useEffect, useState } from "react";
import type { Character } from "~/types";
import { useLocation, useNavigate } from "@remix-run/react";
import InfoItem from "~/components/shared/info-item";

const Profile = () => {
  const [character, setCharacter] = useState<Character | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { url, name } = location.state;

  useEffect(() => {
    setError(false);
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((result) => setCharacter(result))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <div className="Profile">
      <main>
        <div>
          <section>
            <span className="Profile__heading">{name}</span>
          </section>
          <section className="Profile__details">
            {loading && (
              <span className="loading">Loading character information...</span>
            )}
            {error && (
              <span className="error">
                Oops! An error occurred while loading the character. Please
                refresh and try again.
              </span>
            )}
            {character && (
              <>
                <InfoItem label="Height" value={character.height} />
                <InfoItem label="Mass" value={character.mass} />
                <InfoItem label="Hair Colour" value={character.hair_color} />
                <InfoItem label="Skin Colour" value={character.skin_color} />
                <InfoItem label="Eye Colour" value={character.eye_color} />
                <InfoItem label="Birth Year" value={character.birth_year} />
                <InfoItem label="Height" value={character.height} />
                <InfoItem label="Gender" value={character.gender} />
              </>
            )}
            <button onClick={() => navigate(-1)}>Go back to homepage</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
