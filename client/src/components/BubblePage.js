import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// when bubble pages renders, make a get request to fetch the color data from bubbles
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts

  useEffect(() => {
    const getColorData = () => {
      axiosWithAuth()
        .get("/api/colors")
        .then((res) => {
          console.log("res getData:", res.data);
          setColorList(res.data);
        })
        .catch((err) => {
          console.log("error:", err);
        });
    };
    getColorData();
  }, []);

  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
