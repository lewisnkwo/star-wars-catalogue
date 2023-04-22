import type { InfoItem as Props } from "../../../types";

const InfoItem = ({ label, value }: Props) => (
  <div className="InfoItem__item">
    <div className="InfoItem__item-label">{label}</div>
    <div className="InfoItem__item-value">{value}</div>
  </div>
);

export default InfoItem;
