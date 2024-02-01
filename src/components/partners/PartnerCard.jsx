export const PartnerCard = ({ partner, i }) => {
  return (
    <div className="sigle-partner">
      <div className="partner-bg">
        <div className="partner-img">
          <img src={partner.img} alt={partner.name} />
        </div>
        <div className="partner-content">
          <div className="partner-title">
            <h6>{partner.name}</h6>
          </div>
          <div className="partner-subtitle">
            <p>{partner.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
