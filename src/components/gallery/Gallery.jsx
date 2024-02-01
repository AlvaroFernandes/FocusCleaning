import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "./gallery.css";
import Lightbox from "yet-another-react-lightbox";

const Gallery = ({ page, data }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState({});
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    switch (page) {
      case "basic":
        {
          setList(data.basic);
          setLoading(false);
        }

        break;
      case "commercial":
        {
          {
            setList(data.commercial);
            setLoading(false);
          }
        }
        break;
      case "construction":
        {
          {
            setList(data.construction);
            setLoading(false);
          }
        }
        break;
      case "premiun":
        {
          {
            setList(data.premiun);
            setLoading(false);
          }
        }
        break;
      case "endoflease":
        {
          {
            setList(data.endoflease);
            setLoading(false);
          }
        }
        break;
      case "spring":
        {
          {
            setList(data.spring);
            setLoading(false);
          }
        }
        break;
      default:
        break;
    }
  }, [page]);

  return (
    <div className="gallery-area gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4>Our Gallery</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
            {loading && list.length > 0 ? null : (
              <>
                <PhotoAlbum
                  layout="rows"
                  photos={list}
                  onClick={({ index: current }) => setIndex(current)}
                />
                <Lightbox
                  index={index}
                  slides={list}
                  open={index >= 0}
                  close={() => setIndex(-1)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
