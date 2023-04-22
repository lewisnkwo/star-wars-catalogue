import type { IconName } from "@fortawesome/fontawesome-common-types";
import type { SidebarItem as SidebarItemT } from "../../../../types";
import { useNavigate } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props extends SidebarItemT {
  tabIndex: number;
  onSelect: () => void;
}

const SidebarItem = ({ title, icon, slug, tabIndex, onSelect }: Props) => {
  const goTo = useNavigate();
  const faIcon = icon as IconName;

  return (
    <div
      className="SidebarItem"
      role="menuitem"
      aria-label={title}
      tabIndex={tabIndex + 1}
      onClick={() => {
        onSelect();
        goTo(`/${slug}`);
      }}
    >
      <div className="SidebarItem__icon-container">
        <FontAwesomeIcon icon={faIcon} />
      </div>
      <span className="SidebarItem__title">{title}</span>
    </div>
  );
};

export default SidebarItem;
