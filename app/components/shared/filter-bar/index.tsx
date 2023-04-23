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
            ? `Filter${isMenuOpen ? "--open" : "--close"}`
            : `Filter`
        }`}
      >
        <div className="Filter__top">
          <span className="Filter__title">Filter Results</span>
          <span className="Filter__description">
            Filter and sort the results
          </span>
        </div>
        <nav className="Filter__items" aria-label="Filters">
          <Item
            icon=""
            title="Sort Ascending"
            tabIndex={1}
            onSelect={() => {}}
          />
          <Item
            icon=""
            title="Sort Descending"
            tabIndex={2}
            onSelect={() => {}}
          />
        </nav>
      </div>
      {isMenuOpen && <div className="Filter__underlay" onClick={onMenuClose} />}
    </>
  );
};

export default FilterBar;
