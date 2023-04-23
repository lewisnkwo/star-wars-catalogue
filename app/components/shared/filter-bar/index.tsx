import Item from "./filter-item";
import { useEffect } from "react";

interface Props {
  isMenuOpen: boolean | undefined;
  onMenuClose: () => void;
}

const FilterBar = ({ isMenuOpen, onMenuClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`${
          isMenuOpen !== undefined
            ? `FilterBar${isMenuOpen ? "--open" : "--close"}`
            : `FilterBar`
        }`}
      >
        <div className="FilterBar__top">
          <span className="FilterBar__title">Filter Results</span>
          <span className="FilterBar__description">
            Filter and sort the results
          </span>
        </div>
        <nav className="FilterBar__items" aria-label="Filters">
          <Item
            icon="arrow-up-a-z"
            title="Sort Ascending"
            tabIndex={1}
            onSelect={onMenuClose}
          />
          <Item
            icon="arrow-down-a-z"
            title="Sort Descending"
            tabIndex={2}
            onSelect={onMenuClose}
          />
        </nav>
      </div>
      {isMenuOpen && (
        <div className="FilterBar__underlay" onClick={onMenuClose} />
      )}
    </>
  );
};

export default FilterBar;
