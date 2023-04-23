import type { FitlerItem } from "~/types";
import Item from "./filter-item";
import { useEffect } from "react";

interface Props {
  items: FitlerItem[];
  isMenuOpen: boolean | undefined;
  onMenuClose: () => void;
}

const FilterBar = ({ items, isMenuOpen, onMenuClose }: Props) => {
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
          {items.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </nav>
      </div>
      {isMenuOpen && (
        <div className="FilterBar__underlay" onClick={onMenuClose} />
      )}
    </>
  );
};

export default FilterBar;
