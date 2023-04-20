import type { SidebarDetailItem as Props } from "../../../../types";

const SidebarDetailItem = ({ label, value }: Props) => (
  <div className="SidebarDetail__item">
    <div className="SidebarDetail__item-label">{label}</div>
    <div className="SidebarDetail__item-value">{value}</div>
  </div>
);

export default SidebarDetailItem;
