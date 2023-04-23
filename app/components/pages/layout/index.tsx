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
import FilterBar from "~/components/shared/filter-bar";

library.add(faHome, faBars, faFilter, faArrowUpAZ, faArrowDownAZ);

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  const [openSidebar, setOpenSidebar] = useState<boolean | undefined>(
    undefined
  );
  const [openFilterBar, setOpenFilterBar] = useState<boolean | undefined>(
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
      <FilterBar
        isMenuOpen={openFilterBar}
        onMenuClose={() => setOpenFilterBar(false)}
      />
      <div>
        <Header
          onSidebarClick={() => setOpenSidebar(true)}
          onFilterBarClick={() => setOpenFilterBar(true)}
        />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
