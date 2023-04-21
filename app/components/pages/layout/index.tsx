import Header from "~/components/shared/header";
import Footer from "~/components/shared/footer";
import Sidebar from "~/components/shared/sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faGlobe,
  faBars,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faGlobe, faBars, faFilter);

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="Layout">
      <Sidebar
        items={[
          {
            icon: "user",
            title: "Home",
          },
          {
            icon: "globe",
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
