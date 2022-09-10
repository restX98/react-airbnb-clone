import star from "../assets/star.png";
import "./Card.css";

function Card(props) {
  const item = props.item;
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="Card">
      <img src={"images/" + item.coverImg} alt="House" />
      {badgeText && (
        <div className="status-container">
          <span className="status">{badgeText} </span>
        </div>
      )}
      <div className="details">
        <div className="first-line">
          <img className="star" src={star} alt="star" />
          <span className="rating">{item.stats.rating}</span>
          <a className="reviews" href="#">
            ({item.stats.reviewCount})
          </a>
          <div className="separator circle"></div>
          <a className="location" href="#">
            {item.location}
          </a>
        </div>
        <div className="second-line">
          <span>{item.title}</span>
        </div>
        <div className="third-line">
          <span>From ${item.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
