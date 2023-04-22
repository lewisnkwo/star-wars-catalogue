import type { SidebarDetailItem } from "~/types";
import Item from "./item";

export interface Props {
  name: string;
  homeworld: string;
  items: SidebarDetailItem[];
  profile: string;
}

const SidebarDetail = ({ name, homeworld, items, profile }: Props) => (
  <div className="SidebarDetail" aria-label={name}>
    <section className="SidebarDetail__top">
      <div className="SidebarDetail__info">
        <span className="SidebarDetail__title">{name}</span>
        <span className="SidebarDetail__subtitle">
          <a href={homeworld}>Go to homeworld</a>
        </span>
      </div>
    </section>
    <section className="SidebarDetail__items">
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
      <div className="SidebarDetail__profile">
        <a href={profile}>View full profile</a>
      </div>
    </section>
  </div>
);

export default SidebarDetail;
