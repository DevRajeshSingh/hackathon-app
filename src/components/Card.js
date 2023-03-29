import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  const saved_date = new Date(item.saved_date);
  const todays_date = new Date();
  const difference = todays_date.getTime() - saved_date.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  const hours = Math.ceil(difference / (1000 * 3600));
  const minutes = Math.ceil(difference / (1000 * 60));
  return (
    <Link to={`detail/${item.id}`} className={"card_link"}>
      <div className="card_item">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          <div className="card_up_body">
            <img src={item.cover_image} alt="" />
            <h2>
              {item.title.length > 30
                ? item.title.slice(0, 30) + "..."
                : item.title}
            </h2>
          </div>
          <p>{item.summary}</p>
        </div>
        <small>
          uploaded{" "}
          {days > 1
            ? days + " days ago"
            : hours > 1
            ? hours + " hours ago"
            : minutes > 5
            ? minutes + " minutes ago"
            : "just now"}
        </small>
      </div>
    </Link>
  );
}

export default Card;
