import { useEffect, useState } from "react";
import {
  Breadcrumbs,
  Gallery,
  HeaderArea,
  ServiceDetails
} from "../../components";
import axios from "axios";

const InternalPage = ({ page }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataDetails, setDataDetails] = useState({});
  const [dataGallery, setDataGallery] = useState({});

  const urls = [
    "/focuscleaning/data/details.json",
    "/focuscleaning/data/gallery.json"
  ];

  useEffect(() => {
    axios
      .all(urls.map((url) => axios.get(url)))
      .then(
        axios.spread(({ data: Details }, { data: GalleryImages }) => {
          setDataDetails(Details);
          setDataGallery(GalleryImages);
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
        <>
          <ServiceDetails data={dataDetails} page={page} />
          <Gallery page={page} data={dataGallery} />
        </>
      )}
    </>
  );
};

export default InternalPage;
