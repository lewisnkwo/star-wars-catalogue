import type { SidebarDetailItem } from "~/types";
import Item from "./item";

export interface Props {
  name: string;
  homeworld: string;
  items: SidebarDetailItem[];
}

const SidebarDetail = ({ name, homeworld, items }: Props) => (
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
    </section>
  </div>
);

export default SidebarDetail;
