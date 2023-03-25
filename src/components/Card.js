import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  const saved_date = new Date(item.saved_date);
  const todays_date = new Date();
  const difference = todays_date.getTime() - saved_date.getTime();
  const hours = Math.ceil(difference / (1000 * 3600));
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return (
    <Link to={`detail/${item.id}`} style={{ textDecoration: "none" }}>
      <div className="card_item">
        <div className="card_up_body">
          <img src={item.cover_image} alt="" />
          <h2>
            {item.title.length > 30
              ? item.title.slice(0, 30) + "..."
              : item.title}
          </h2>
        </div>
        <p>{item.summary}</p>
        <small>
          uploaaded {days === 1 ? `${hours} hours ago` : `${days} days ago`}
        </small>
      </div>
    </Link>
  );
}

export default Card;
