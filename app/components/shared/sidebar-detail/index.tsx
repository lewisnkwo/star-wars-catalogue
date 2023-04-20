import type { SidebarDetailItem } from "~/types";

export interface Props {
  title: string;
  subtitle: string;
  items: SidebarDetailItem[];
}

const SidebarDetail = ({ title, subtitle, items }: Props) => (
  <div className="SidebarDetail" aria-label={title}>
    <section className="SidebarDetail__top">
      <div className="SidebarDetail__info">
        <span className="SidebarDetail__title">{title}</span>
        <span className="SidebarDetail__subtitle">{subtitle}</span>
      </div>
      <section className="SidebarDetail__items">
        {items.map((item, i) => (
          <span key={i}>{item.label}</span>
        ))}
      </section>
    </section>
  </div>
);

export default SidebarDetail;
