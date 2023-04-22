import Header from "~/components/shared/header";
import Footer from "~/components/shared/footer";
import Sidebar from "~/components/shared/sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faHome,
  faBars,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

library.add(faUser, faHome, faBars, faFilter);

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean | undefined>(undefined);

  return (
    <div className="Layout">
      <Sidebar
        isMenuOpen={openMenu}
        items={[
          {
            icon: "home",
            title: "Home",
            slug: "",
          },
        ]}
        onMenuClose={() => setOpenMenu(false)}
      />
      <div>
        <Header onMenuClick={() => setOpenMenu(true)} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
