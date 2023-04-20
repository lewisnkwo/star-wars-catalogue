import type { SidebarItem as SidebarItemT } from "../../../../types";
import { useNavigate } from "@remix-run/react";

interface Props extends SidebarItemT {
  tabIndex: number;
}

const SidebarItem = ({ title, slug, tabIndex }: Props) => {
  const goTo = useNavigate();

  return (
    <div
      className="SidebarItem"
      role="menuitem"
      aria-label={title}
      tabIndex={tabIndex + 1}
      onClick={() => goTo(`/${slug ?? ""}`)}
    >
      <div className="SidebarItem__icon-container">
        {/* add FA icon here */}
      </div>
      <span className="SidebarItem__title">{title}</span>
    </div>
  );
};

export default SidebarItem;
