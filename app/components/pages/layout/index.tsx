interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="Layout">
      <div>Sidebar</div>
      <div>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Layout;
