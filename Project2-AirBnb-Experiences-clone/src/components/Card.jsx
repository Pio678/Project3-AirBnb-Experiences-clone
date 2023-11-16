import starImg from "../../public/Star.svg";

function Card({
  cardImg,
  experienceName,
  price,
  rating,
  reviewCount,
  country,
  openSpots,
  location,
}) {
  let badgeText;

  if (openSpots === 0) {
    badgeText = "SOLD-OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={cardImg} />
        {badgeText && <p className="status">{badgeText}</p>}
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
