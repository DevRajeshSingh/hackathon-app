import React, { useContext, createContext, useState, useEffect } from "react";

const HackthonContext = createContext();
export const useHackthon = () => useContext(HackthonContext);

const HackthonProvider = ({ children }) => {
  const [hackthonList, setHackthonList] = useState([]);

  useEffect(() => {
    getHackthonData();
  }, []);

  const getHackthonData = async () => {
    try {
      const hackthonData =
        JSON.parse(localStorage.getItem("hackthonData")) || [];
      setHackthonList(hackthonData);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneHackthonData = (hackid) => {
    const hackthonItem = hackthonList.filter((hack) => hack.id === hackid);
    return hackthonItem[0];
  };

  const editHackthon = async (hackid, formData) => {
    removeHackthon(hackid);
    createHackthon(formData);
  };

  const removeHackthon = async (hackid) => {
    const hackthonData = JSON.parse(localStorage.getItem("hackthonData")) || [];
    const updatedHackthonData = hackthonData.filter(
      (hack) => hack.id !== hackid
    );
    localStorage.setItem("hackthonData", JSON.stringify(updatedHackthonData));
    getHackthonData();
  };

  const addTOFavourite = async (hackid) => {
    const hackthonData = JSON.parse(localStorage.getItem("hackthonData")) || [];
    const updatedHackthonData = hackthonData.map((hack) => {
      if (hack.id === hackid) {
        hack.favourite = !hack.favourite;
      }
      return hack;
    });
    localStorage.setItem("hackthonData", JSON.stringify(updatedHackthonData));
    getHackthonData();
  };

  const createHackthon = async (formData) => {
    const hackthonData = JSON.parse(localStorage.getItem("hackthonData")) || [];
    const updatedHackthonData = [...hackthonData, formData];
    localStorage.setItem("hackthonData", JSON.stringify(updatedHackthonData));
    getHackthonData();
  };

  return (
    <HackthonContext.Provider
      value={{
        hackthonList,
        editHackthon,
        removeHackthon,
        createHackthon,
        addTOFavourite,
        getHackthonData,
        getOneHackthonData,
      }}
    >
      {children}
    </HackthonContext.Provider>
  );
};

export default HackthonProvider;
