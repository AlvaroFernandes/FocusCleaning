import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const handlePreloader = () => {
      const preloader = document.querySelector("#loader");
      if (preloader) {
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    };
    handlePreloader();
  }, []);

  return <div id="loader"></div>;
};

export default Preloader;
