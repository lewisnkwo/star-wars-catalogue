interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => (
  <header>
    <button id="menu-button" aria-label="Menu" onClick={onMenuClick}>
      {/* bars icon */}
    </button>
    <>
      <input
        type="search"
        placeholder="Search"
        role="search"
        aria-label="Search"
      />
      <button aria-label="Settings">{/* cog icon */}</button>
    </>
  </header>
);

export default Header;
