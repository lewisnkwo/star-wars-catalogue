import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onSidebarOpen: () => void;
  onFilterBarOpen: () => void | undefined;
  showFilter: boolean;
}

const Header = ({ onSidebarOpen, onFilterBarOpen, showFilter }: Props) => {
  return (
    <header>
      <button id="menu-button" aria-label="Menu" onClick={onSidebarOpen}>
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
        {showFilter && (
          <button
            className="Header__filter-button"
            aria-label="Filter"
            onClick={onFilterBarOpen}
          >
            <FontAwesomeIcon icon="filter" />
          </button>
        )}
      </>
    </header>
  );
};

export default Header;
