import starImg from "../../public/Star.svg";

function Card({
  cardImg,
  experienceName,
  price,
  rating,
  reviewCount,
  country,
  status,
}) {
  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={cardImg} />
        <p className="status">{status}</p>
      </div>

      <div className="card-details-container">
        <div className="card-info-container">
          <img
            className="card-star-img"
            src={starImg}
            alt="picture of a star"
          />
          <span className="card-rating"> {rating}</span>({reviewCount}) &#8901;{" "}
          {country}
        </div>

        <p className="card-description">{experienceName}</p>

        <p className="card-price">
          <strong>From ${price}</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
