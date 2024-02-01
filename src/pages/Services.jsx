import { useEffect, useState } from "react";
import { Breadcrumbs, HeaderArea, ServicesInfo } from "../components";
import axios from "axios";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/data/services.json")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <HeaderArea />
      <Breadcrumbs />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <ServicesInfo data={data} />
      )}
    </>
  );
};

export default Services;
