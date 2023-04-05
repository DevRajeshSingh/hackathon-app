import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailContent from "../components/DetailContent";
import DetailHero from "../components/DetailHero";
import { useHackthon } from "../context/HackathonContext";

function Detail() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { getOneHackthonData } = useHackthon();

  useEffect(() => {
    const temp = getOneHackthonData(parseInt(id));
    setItem(temp);
  }, []);

  const getItemDate = (temp_date) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date =
      new Date(temp_date).getDate() +
      " " +
      month[new Date(temp_date).getMonth()] +
      " " +
      new Date(temp_date).getUTCFullYear();

    return date;
  };
  return (
    <>
      {item ? (
        <>
          <DetailHero item={item} getItemDate={getItemDate} />
          <DetailContent item={item} getItemDate={getItemDate} />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default Detail;
