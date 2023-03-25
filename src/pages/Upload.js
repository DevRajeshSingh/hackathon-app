import React, { useState } from "react";
import Form from "../components/Form";

function Upload() {
  const [hackathonItem, setHackathonItem] = useState({
    id: new Date().getTime(),
    title: "",
    summary: "",
    description: "",
    cover_image: null,
    hackathon_name: "",
    start_date: "",
    end_date: "",
    github_repository_link: "",
    other_links: "",
    favourite: false,
    saved_date: new Date(),
  });

  return (
    <>
      <Form hackathonItem={hackathonItem} setHackathonItem={setHackathonItem} isUpload={true}/>
    </>
  );
}

export default Upload;
