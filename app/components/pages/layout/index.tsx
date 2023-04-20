import Header from "~/components/shared/header";
import Footer from "~/components/shared/footer";
import Sidebar from "~/components/shared/sidebar";

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="Layout">
      <Sidebar
        items={[
          {
            icon: "",
            title: "Home",
          },
          {
            icon: "",
            title: "Planet",
          },
        ]}
      />
      <div>
        <Header onMenuClick={() => {}} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
