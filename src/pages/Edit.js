import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import { useHackthon } from "../context/HackathonContext";

const Edit = () => {
  const [hackathonItem, setHackathonItem] = useState(null);
  const { getOneHackthonData } = useHackthon();
  const { id } = useParams();
  useState(() => {
    const temp = getOneHackthonData(parseInt(id));
    setHackathonItem(temp);
  }, [id]);
  return (
    <>
      {hackathonItem ? (
        <Form
          hackathonItem={hackathonItem}
          setHackathonItem={setHackathonItem}
          isUpload={false}
        />
      ) : (
        <h3
          style={{
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Loading...
        </h3>
      )}
    </>
  );
};

export default Edit;
