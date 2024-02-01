import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const cards = data.ServiceCards;
  return (
    <>
      <div className="promo-area">
        <div className="container">
          <div className="row" v-if="promo.length > 0">
            {cards.length > 0 &&
              cards.map((item, i) => (
                <Link to={item.link} key={item.id} className="col-lg-4 col-12">
                  <div
                    className={`single-promo-item mb-50 ${
                      i === 1 ? "spro" : ""
                    }`}
                  >
                    <div className="promo-icon">
                      <i className="fa fa-house"></i>
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
