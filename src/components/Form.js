import React, { useState } from "react";
import { useHackthon } from "../context/HackathonContext";
import { useNavigate } from "react-router-dom";

export default function Form({
  hackathonItem,
  setHackathonItem,
  isUpload,
}) {
  const [imageName, setImageName] = useState("");
  const { editHackthon, createHackthon } = useHackthon();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cover_image") {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      setImageName(e.target.files[0].name);
      reader.onload = (event) => {
        setHackathonItem((prevhackathonItem) => ({
          ...prevhackathonItem,
          [name]: event.target.result,
        }));
      };
    } else {
      setHackathonItem((prevhackathonItem) => ({
        ...prevhackathonItem,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hackathonItem);
    if (isUpload) {
      createHackthon(hackathonItem);
      window.alert("Your submission has been successfully uploaded!");
      navigate("/");
    } else {
      editHackthon(hackathonItem.id, hackathonItem);
      window.alert("Your submission has been successfully edited!");
      navigate("/");
    }
  };

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <div className="flex-column">
        <h1>New Hackathon Submission</h1>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          required={true}
          name="title"
          placeholder="Title of your submission"
          value={hackathonItem.title}
          onChange={handleChange}
        />
      </div>
      <div className="flex-column">
        <label htmlFor="summary">Summary </label>
        <input
          id="summary"
          required={true}
          name="summary"
          type="text"
          placeholder="A short summary of your submission (this will be visible with your submission)"
          value={hackathonItem.summary}
          onChange={handleChange}
        />
      </div>
      <div className="flex-column">
        <label htmlFor="description">Description </label>
        <textarea
          id="description"
          required={true}
          name="description"
          placeholder="Write a long description of your project. You can describe your idea and approach here."
          value={hackathonItem.description}
          onChange={handleChange}
        />
      </div>
      <div className="flex-column">
        <label htmlFor="cover_image">Cover Image</label>
        <small>Minimum resolution: 360px X 360px</small>
        <input
          type="file"
          id="cover_image"
          name="cover_image"
          required={hackathonItem.cover_image ? false : true}
          data-testid="cover_image"
          className={hackathonItem.cover_image ? "has-image" : ""}
          style={
            hackathonItem.cover_image && {
              backgroundImage: `url(${hackathonItem.cover_image})`,
            }
          }
          accept="image/*"
          onChange={handleChange}
        />
        <p className="image_name">{imageName}</p>
      </div>

      <div className="flex-column">
        <label htmlFor="hackathon_name">Hackathon Name </label>
        <input
          type="text"
          id="hackathon_name"
          name="hackathon_name"
          required={true}
          placeholder="Enter the name of the hackathon"
          value={hackathonItem.hackathon_name}
          onChange={handleChange}
        />
      </div>

      <div className="from_date_container">
        <div className="flex-column">
          <label htmlFor="start_date">Hackathon Start Date </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            required={true}
            placeholder="Select start date"
            value={hackathonItem.start_date}
            onChange={handleChange}
          />
        </div>
        <div className="flex-column">
          <label htmlFor="end_date">Hackathon End Date </label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            required={true}
            placeholder="Select end date"
            value={hackathonItem.end_date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex-column">
        <label htmlFor="github_repository_link">Github Repository</label>
        <input
          type="text"
          id="github_repository_link"
          required={true}
          name="github_repository_link"
          placeholder="Enter your submission’s public GitHub repository link"
          value={hackathonItem.github_repository_link}
          onChange={handleChange}
        />
      </div>
      <div className="flex-column">
        <label htmlFor="other_links">Other Links </label>
        <input
          type="text"
          id="other_links"
          name="other_links"
          placeholder="You can upload a video demo or URL of you demo app here."
          value={hackathonItem.other_links}
          onChange={handleChange}
        />
      </div>
      <button className="hero-button" type="submit">
        Upload Submission
      </button>
    </form>
  );
}
