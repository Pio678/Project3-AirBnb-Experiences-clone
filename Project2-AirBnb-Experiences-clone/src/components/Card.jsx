import starImg from "../assets/Star.svg";

function Card({ cardImg }) {
  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={cardImg} />
        <p className="status">SOLD-OUT</p>
      </div>

      <div className="card-details-container">
        <div className="card-info-container">
          <img
            className="card-star-img"
            src={starImg}
            alt="picture of a star"
          />
          <span className="card-rating"> 5.0 </span>
          (6) &#8901; USA
        </div>

        <p className="card-description">Life lessons with Katie Zaferes</p>

        <p className="card-price">
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
