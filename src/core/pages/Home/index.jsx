import ContentComponent from "core/components/organisms/Content";
import FooterComponent from "core/components/organisms/Footer";
import NavbarComponent from "core/components/organisms/Navbar";

import dataNavbar from "core/data/dataNavbar";

const pagesHome = () => {
  return (
    <>
      <NavbarComponent data={dataNavbar} />
      <ContentComponent />
      <FooterComponent />
    </>
  );
};

export default pagesHome;
