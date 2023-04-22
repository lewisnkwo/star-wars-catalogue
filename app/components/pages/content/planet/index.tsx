import { useEffect, useState } from "react";
import type { Planet } from "~/types";
import { useLocation, useNavigate } from "@remix-run/react";
import InfoItem from "~/components/shared/info-item";

const CharacterPlanet = () => {
  const [planet, setPlanet] = useState<Planet | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { url } = location.state;

  useEffect(() => {
    setError(false);
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((result) => setPlanet(result))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <div className="Planet">
      <main>
        <div>
          <section>
            <span className="Planet__heading">{planet?.name ?? "Planet"}</span>
          </section>
          <section className="Planet__details">
            {loading && (
              <span className="loading">Loading planet information...</span>
            )}
            {error && (
              <span className="error">
                Oops! An error occurred while loading the planet. Please refresh
                and try again.
              </span>
            )}
            {planet && (
              <>
                <InfoItem
                  label="Rotation Period"
                  value={planet.rotation_period}
                />
                <InfoItem
                  label="Orbital Period"
                  value={planet.orbital_period}
                />
                <InfoItem label="Diameter" value={planet.diameter} />
                <InfoItem label="Climate" value={planet.climate} />
                <InfoItem label="Gravity" value={planet.gravity} />
                <InfoItem label="Terrain" value={planet.terrain} />
                <InfoItem label="Surface Water" value={planet.surface_water} />
                <InfoItem label="Population" value={planet.population} />
                <div className="Planet__residents-label">Residents</div>
                <div className="Planet__residents">
                  {planet.residents.map((r, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        navigate("/profile", {
                          state: {
                            url: r,
                          },
                        })
                      }
                    >
                      Resident {i + 1}
                    </button>
                  ))}
                </div>
              </>
            )}
            <div className="Planet__actions">
              <button onClick={() => navigate(-1)}>Go back</button>
              <button onClick={() => navigate("/")}>Go back to homepage</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CharacterPlanet;
