import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => {
  return (
    <header>
      <button id="menu-button" aria-label="Menu" onClick={onMenuClick}>
        <FontAwesomeIcon icon="bars" />
      </button>
      <>
        <form method="get" action="/search">
          <input
            name="term"
            type="search"
            placeholder="Search people (min 3. characters)"
            role="search"
            aria-label="Search people"
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
