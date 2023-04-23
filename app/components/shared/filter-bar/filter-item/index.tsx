import type { IconName } from "@fortawesome/fontawesome-common-types";
import type { FitlerItem } from "../../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Props = FitlerItem;

const FilterItem = ({ title, icon, tabIndex, onSelect }: Props) => {
  const faIcon = icon as IconName;

  return (
    <div
      className="FilterItem"
      role="menuitem"
      aria-label={title}
      tabIndex={tabIndex + 1}
      onClick={onSelect}
    >
      <div className="FilterItem__icon-container">
        <FontAwesomeIcon icon={faIcon} />
      </div>
      <span className="FilterItem__title">{title}</span>
    </div>
  );
};

export default FilterItem;
