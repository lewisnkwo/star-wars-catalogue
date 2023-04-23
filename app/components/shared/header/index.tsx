import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onSidebarClick: () => void;
  onFilterBarClick: () => void;
}

const Header = ({ onSidebarClick, onFilterBarClick }: Props) => {
  return (
    <header>
      <button id="menu-button" aria-label="Menu" onClick={onSidebarClick}>
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
        <button aria-label="Filter" onClick={onFilterBarClick}>
          <FontAwesomeIcon icon="filter" />
        </button>
      </>
    </header>
  );
};

export default Header;
