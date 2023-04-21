import type { Size } from "../../../types";
import { createInitials } from "../../../utils";

interface Props {
  image: string | null;
  name: string;
  size: Size;
}

const Image = ({ image, name, size }: Props) => (
  <div className={`Image--${size}`} aria-label={`Image of ${name}`}>
    {image !== null ? (
      <img className="Image__image" src={image} alt={name} />
    ) : (
      <span className="Image__initials">{createInitials(name)}</span>
    )}
  </div>
);

export default Image;
