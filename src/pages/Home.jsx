import { useEffect, useState } from "react";
import {
  HeaderTop,
  HeaderArea,
  HeroArea,
  Cards,
  Testimonial
} from "../components";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataBanner, setDataBanner] = useState({});
  const [dataCards, setDataCards] = useState({});

  const urls = [
    "/focuscleaning/data/banner.json",
    "/focuscleaning/data/cards.json"
  ];

  useEffect(() => {
    axios
      .all(urls.map((url) => axios.get(url)))
      .then(
        axios.spread(({ data: Banner }, { data: ServiceCards }) => {
          setDataBanner(Banner);
          setDataCards(ServiceCards);
          setIsLoading(false);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderTop />
      <HeaderArea />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <HeroArea type={true} data={dataBanner} />
          <Cards data={dataCards} />
        </>
      )}

      <Testimonial />
    </>
  );
};

export default Home;
