import type { InfoItem } from "~/types";
import Item from "../info-item";
import { useNavigate } from "@remix-run/react";

export interface Props {
  name: string;
  homeworld: string;
  items: InfoItem[];
  profile: string;
}

const SidebarDetail = ({ name, homeworld, items, profile }: Props) => {
  const navigate = useNavigate();

  return (
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
        <div className="SidebarDetail__profile">
          <button
            onClick={() =>
              navigate("/profile", {
                state: {
                  url: profile,
                  name,
                },
              })
            }
          >
            View profile
          </button>
        </div>
      </section>
    </div>
  );
};

export default SidebarDetail;
