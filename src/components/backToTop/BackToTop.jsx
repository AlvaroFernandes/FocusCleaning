import useScrollingProgress from "../../hooks/useScrollingProgress";
import CircularProgress from "./CircularProgress";

import "./backToTop.css";

const BackToTop = () => {
  const progress = useScrollingProgress();
  return (
    <a href="#" className={`back-top ${progress ? "active-progress" : ""}`}>
      <CircularProgress progress={progress} cW={90} />
    </a>
  );
};

export default BackToTop;
