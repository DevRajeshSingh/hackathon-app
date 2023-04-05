import React from "react";
import { CalenderIcon, GithubIcon, OpenLinkIcon } from "../Assets/icons";
const DetailContent = ({ item, getItemDate }) => {
  return (
    <>
      <div className="detail_content">
        <div className="detail_content_left">
          <h3>Description</h3>
          <p>{item.description}</p>
        </div>
        <div className="detail_content_right">
          <h3>Hackathon</h3>
          <h2>{item.hackathon_name}</h2>
          <div className="detail_duration">
            {React.createElement(CalenderIcon)}
            {`   ${getItemDate(item.start_date)} - ${getItemDate(
              item.end_date
            )}`}
          </div>
          <div className="detail_links">
            <a
              href={item.github_repository_link}
              target="_blank"
              rel="noreferrer"
            >
              <span>{React.createElement(GithubIcon)}</span>
              <span> Github Repository</span>
            </a>
            {item.other_links !== "" && (
              <a href={item.other_links} target="_blank" rel="noreferrer">
                <span>{React.createElement(OpenLinkIcon)}</span>
                <span> Other Link</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailContent;
