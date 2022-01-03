import React from "react";

const cardContainer = ({ width, height, backgroundColor }) => {
  const style = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: "20px",
  };
  return <div style={style}>Hi</div>;
};

export default cardContainer;
