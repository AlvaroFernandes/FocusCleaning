import { useEffect, useRef, useState } from "react";
import "./serviceDetails.css";
import { Modal } from "react-bootstrap";
import ModalFormQuote from "../modal/ModalFormQuote";
import ModalFormAvailability from "../modal/ModalFormAvailability";
import Icon from "../Icon";

const ServiceDetails = ({ data, page }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [modalA, setModalA] = useState(false);
  const [modalQ, setModalQ] = useState(false);

  useEffect(() => {
    switch (page) {
      case "basic":
        {
          setDetails(data.basic);
          setLoading(false);
        }

        break;
      case "commercial":
        {
          {
            setDetails(data.commercial);
            setLoading(false);
          }
        }
        break;
      case "construction":
        {
          {
            setDetails(data.construction);
            setLoading(false);
          }
        }
        break;
      case "premiun":
        {
          {
            setDetails(data.premiun);
            setLoading(false);
          }
        }
        break;
      case "endoflease":
        {
          {
            setDetails(data.endoflease);
            setLoading(false);
          }
        }
        break;
      case "spring":
        {
          {
            setDetails(data.spring);
            setLoading(false);
          }
        }
        break;
      default:
        break;
    }
  }, [page]);

  const handleCloseQ = () => setModalQ(false);
  const handleCloseA = () => setModalA(false);
  const handleShowQ = () => setModalQ(true);
  const handleShowA = () => setModalA(true);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="project-single-section pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-aling-center">
                <h3>{details.title}</h3>

                <div className="row mb-15">
                  <div className="col-lg-8">
                    {details.intro.map((item, i) => {
                      return (
                        <div key={i}>
                          <p>{item}</p>
                          <br />
                        </div>
                      );
                    })}
                    <div className="project-feature-img">
                      <img src={details.img} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="project-overview">
                      <div className="price-section">
                        <div className="col-12">
                          <div className="single-price-item wow">
                            <h5>Pricing</h5>
                            <div className="price-box">
                              {details.price > 0 ? (
                                <p>From ${details.price} / per hour.</p>
                              ) : (
                                <button
                                  onClick={handleShowQ}
                                  className="main-btn small-btn"
                                >
                                  Check prices
                                </button>
                              )}
                            </div>
                            <div
                              onClick={handleShowA}
                              className="main-btn small-btn"
                            >
                              Check Availability
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mb-15">
                  <div className="col-lg-10">
                    <h4>{details.subtitle}</h4>
                    {details.services.map((item, i) => (
                      <div className="list-details" key={i}>
                        <div className="title-details">
                          <Icon name={item.icon} size="35" color="#4eb39a" />
                          <h5>{item.title}</h5>
                        </div>
                        <ul className="service-details">
                          {item.details.map((x, i) => (
                            <li key={i}>
                              <p>{x}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                {details.options === "" ? (
                  <div className="row mt-30">
                    <div className="col-lg-12">
                      <p className="details-options">
                        <span>Options: </span>
                        <br />
                        {details.options}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <Modal
              show={modalA}
              centered
              onHide={handleCloseA}
              animation={true}
            >
              <Modal.Header className="modal-header" closeButton>
                <Modal.Title>Check the Availability</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                <ModalFormAvailability data={page} />
              </Modal.Body>
            </Modal>
            <Modal
              show={modalQ}
              centered
              onHide={handleCloseQ}
              animation={true}
            >
              <Modal.Header className="modal-header" closeButton>
                <Modal.Title>Get a Quote</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                <ModalFormQuote />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
