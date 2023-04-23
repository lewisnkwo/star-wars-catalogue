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
            Sort and filter the results
          </span>
        </div>
        <div className="">
          <section className="FilterBar__items" aria-label="Sort by">
            <label>Sort</label>
            {items.map((item, i) => (
              <Item key={i} {...item} />
            ))}
            <label>Filter by Gender</label>
            <select
              className="FilterBar__select"
              name="gender"
              defaultValue="all"
              onChange={(e) => e.currentTarget.value}
              aria-label="Filter by Gender"
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="na">N/A</option>
            </select>
          </section>
        </div>
      </div>
      {isMenuOpen && (
        <div className="FilterBar__underlay" onClick={onMenuClose} />
      )}
    </>
  );
};

export default FilterBar;
