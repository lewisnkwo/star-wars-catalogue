import Image from "../image";
import Item from "./sidebar-item";
import type { SidebarItem as SidebarItemT } from "../../../types";

interface Props {
  items: SidebarItemT[];
}

const Sidebar = ({ items }: Props) => {
  return (
    <div>
      <div className="Sidebar__top">
        <Image image={null} name="Star Wars Logo" size="medium" />
        <span className="Sidebar__title">Star Wars Catalogue</span>
        <span className="Sidebar__description">
          Search your favourite Star Wars characters and find out their info
        </span>
      </div>
      <nav className="Sidebar__items" aria-label="Side Navigation">
        {items.map(({ icon, title, slug }, i) => (
          <Item key={i} icon={icon} title={title} slug={slug} tabIndex={i} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
