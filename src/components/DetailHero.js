import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StarIcon,
  StarfillIcon,
  DeleteIcon,
  EditIcon,
  CalenderIcon,
} from "../Assets/icons";
import { useHackthon } from "../context/HackathonContext";
import { useNavigate } from "react-router-dom";

function DeletePopUpBox({ id, removeHackthon, setDeletePopUpVisible }) {
  const navigate = useNavigate();
  return (
    <div className="delete_popup">
      <div className="delete_popup_container">
        <div>
          <h2>Delete Model</h2>
          <p>
            This action is irreversible. Are you sure you want to delete this
            model?
          </p>
        </div>
        <div className="delete_popup_buttons">
          <button
            className="d_button"
            onClick={() => {
              setDeletePopUpVisible(false);
            }}
          >
            Cancel
          </button>
          <button
            className="d_button"
            style={{ backgroundColor: "#DF2C1D" }}
            onClick={() => {
              removeHackthon(id);
              setDeletePopUpVisible(false);
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailHero({ item, getItemDate }) {
  const { removeHackthon, addTOFavourite, getHackthonData } = useHackthon();
  const [isFavourite , setIsFavourite] = useState(item.favourite)
  const [deletePopUpVisible, setDeletePopUpVisible] = useState(false);
  return (
    <div className="detail_Hero">
      {deletePopUpVisible && (
        <DeletePopUpBox
          id={item.id}
          setDeletePopUpVisible={setDeletePopUpVisible}
          removeHackthon={removeHackthon}
        />
      )}
      <div className="detail_hero_container">
        <div className="detail_hero_top">
          <div className="detail_hero_top_left">
            <img src={item.cover_image} alt="Cover Image" />
            <h1>{item.title}</h1>
          </div>
          <div className="detail_hero_top_right">
            <Link to={`/edit/${item.id}`} className="d_button">
              {React.createElement(EditIcon)} Edit
            </Link>

            <button
              className="d_button"
              onClick={() => {
                setDeletePopUpVisible(true);
              }}
            >
              {React.createElement(DeleteIcon)} Delete
            </button>
          </div>
        </div>
        <p className="detail_hero_middle">{item.summary}</p>
        <div className="detail_hero_bottom">
          <button
            onClick={() => {
              addTOFavourite(item.id);
              setIsFavourite(!isFavourite)
              getHackthonData();
            }}
          >
            {isFavourite
              ? React.createElement(StarfillIcon)
              : React.createElement(StarIcon)}
          </button>
          <p>
            {React.createElement(CalenderIcon)}
            {getItemDate(item.saved_date)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailHero;
