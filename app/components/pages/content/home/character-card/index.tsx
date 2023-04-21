import Image from "../../../../shared/image";

export interface Props {
  name: string;
  planet: string;
  onSelect: () => void;
  isSelected: boolean;
  tabIndex: number;
}

const CharacterCard = ({
  name,
  planet,
  onSelect,
  isSelected,
  tabIndex,
}: Props) => (
  <button
    className={`CharacterCard${isSelected ? "--selected" : ""}`}
    onClick={onSelect}
    aria-label={name}
    tabIndex={tabIndex}
  >
    <Image image={null} name={name} size="small" />
    <div className="CharacterCard__info">
      <span className="CharacterCard__title">{name}</span>
      <span className="CharacterCard__subtitle">{planet}</span>
    </div>
  </button>
);

export default CharacterCard;
