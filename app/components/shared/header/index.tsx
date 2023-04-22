import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";

interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/search", {
      state: {
        query: searchQuery,
      },
    });
  };

  return (
    <header>
      <button id="menu-button" aria-label="Menu" onClick={onMenuClick}>
        <FontAwesomeIcon icon="bars" />
      </button>
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search people (min 3. characters)"
            role="search"
            aria-label="Search people"
            onChange={(e) => {
              e.preventDefault();
              setSearchQuery(e.target.value);
            }}
          />
        </form>
        <button aria-label="Settings">
          <FontAwesomeIcon icon="filter" />
        </button>
      </>
    </header>
  );
};

export default Header;
