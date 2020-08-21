import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// when bubble pages renders, make a get request to fetch the color data from bubbles
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts

  const getColorData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then((res) => {
        // console.log("res getData:", res.data);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  useEffect(() => {
    getColorData();
  }, []);

  // set that data to the colorList state property

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColorData={getColorData}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
