import Footer from "./Footer";
import Header from "./Header";
import SubBanner from "./SubBanner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SubBanner />
      {children}
      <Footer />
    </>
  );
};

export default Layout;