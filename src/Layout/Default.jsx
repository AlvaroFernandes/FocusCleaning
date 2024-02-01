import { Outlet } from "react-router-dom";
//utils
import ScrollToTop from "../utils/ScrollToTop";
import useScroll from "../hooks/useScroll";
import { Preloader, Footer, FooterBottom, BackToTop } from "../components";

const Default = () => {
  const scrolled = useScroll();
  return (
    <ScrollToTop>
      <Preloader />
      <Outlet context={[scrolled]} />
      <Footer />
      <FooterBottom />
      <BackToTop />
    </ScrollToTop>
  );
};

export default Default;
