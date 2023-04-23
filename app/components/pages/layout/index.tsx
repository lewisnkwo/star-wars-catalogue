import React from "react";
import Header from "~/components/shared/header";
import Footer from "~/components/shared/footer";
import Sidebar from "~/components/shared/sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faBars,
  faFilter,
  faArrowUpAZ,
  faArrowDownAZ,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "@remix-run/react";

library.add(faHome, faBars, faFilter, faArrowUpAZ, faArrowDownAZ);

interface Props {
  children: React.ReactElement;
  showFilterBar: () => void;
}

const Layout = ({ children, showFilterBar }: Props) => {
  const location = useLocation();
  const [openSidebar, setOpenSidebar] = useState<boolean | undefined>(
    undefined
  );

  return (
    <div className="Layout">
      <Sidebar
        isMenuOpen={openSidebar}
        items={[
          {
            icon: "home",
            title: "Home",
            slug: "",
          },
        ]}
        onMenuClose={() => setOpenSidebar(false)}
      />
      <div>
        <Header
          onSidebarClick={() => setOpenSidebar(true)}
          onFilterBarClick={showFilterBar}
          showFilter={location.pathname === "/"}
        />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
