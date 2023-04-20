interface Props {
  image: string | null;
  name: string;
  size: "small" | "medium" | "large";
}

const Image = ({ image, name, size }: Props) => (
  <div className={`Image--${size}`} aria-label={`Image of ${name}`}>
    <img className="Image__img" src={image ?? undefined} alt={name} />
  </div>
);

export default Image;
