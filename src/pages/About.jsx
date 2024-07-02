import { useEffect, useState } from "react";
import { HeaderArea, Breadcrumbs, AboutInfo, Partners } from "../components";
import axios from "axios";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataAbout, setDataAbout] = useState({});
  const [dataPart, setDataPartners] = useState({});

  const urls = ["/data/about.json", "/data/partners.json"];

  useEffect(() => {
    axios
      .all(urls.map((url) => axios.get(url)))
      .then(
        axios.spread(({ data: About }, { data: Partners }) => {
          setDataAbout(About);
          setDataPartners(Partners);
          setIsLoading(false);
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <HeaderArea />
      <Breadcrumbs />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <AboutInfo data={dataAbout} />
      )}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <Partners type={false} data={dataPart} />
      )}
    </>
  );
};

export default About;
