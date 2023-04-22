import Image from "../image";
import Item from "./sidebar-item";
import type { SidebarItem } from "../../../types";
import starWarsLogo from "../../../images/star-wars-logo.png";
import { useEffect } from "react";

interface Props {
  items: SidebarItem[];
  isMenuOpen: boolean | undefined;
  onMenuClose: () => void;
}

const Sidebar = ({ items, isMenuOpen, onMenuClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`${
          isMenuOpen !== undefined
            ? `Sidebar${isMenuOpen ? "--open" : "--close"}`
            : `Sidebar`
        }`}
      >
        <div className="Sidebar__top">
          <Image image={starWarsLogo} name="Star Wars Logo" size="medium" />
          <span className="Sidebar__title">Star Wars Catalogue</span>
          <span className="Sidebar__description">
            Search your favourite Star Wars characters and find out their info
          </span>
        </div>
        <nav className="Sidebar__items" aria-label="Side Navigation">
          {items.map(({ icon, title, slug }, i) => (
            <Item
              key={i}
              icon={icon}
              title={title}
              slug={slug}
              tabIndex={i}
              onSelect={() => {
                if (slug === "") {
                  onMenuClose();
                }
              }}
            />
          ))}
        </nav>
      </div>
      {isMenuOpen && (
        <div className="Sidebar__underlay" onClick={onMenuClose} />
      )}
    </>
  );
};

export default Sidebar;
