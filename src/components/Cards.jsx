import { Link } from "react-router-dom";
import Icon from "./Icon";

const Cards = ({ data }) => {
  const cards = data.ServiceCards;
  return (
    <>
      <div className="promo-area">
        <div className="container">
          <div className="row">
            {cards.length > 0 &&
              cards.map((item, i) => (
                <Link to={item.link} key={item.id} className="col-xl-4">
                  <div
                    className={`single-promo-item mb-20 ${
                      i === 1 ? "spro" : ""
                    }`}
                  >
                    <div className="promo-icon">
                      <Icon name={item.icon} size="50" />
                    </div>
                    <h5>{item.heading}</h5>
                    <p>{item.title}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
