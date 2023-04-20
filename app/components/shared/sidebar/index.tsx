import Image from "../image";

const Sidebar = () => {
  return (
    <div>
      <div className="Sidebar__top">
        <Image image={null} name="Star Wars Logo" size="medium" />
        <span className="Sidebar__title">Star Wars Catalogue</span>
        <span className="Sidebar__description">
          Search your favourite Star Wars characters and find out their info
        </span>
      </div>
      {/* Add sidebar items here */}
    </div>
  );
};

export default Sidebar;
