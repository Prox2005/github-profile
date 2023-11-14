import React from "react";
import "./box.css";

const Box = ({ data, value }) => {
  return (
    <div className="box">
      <h3>{data}</h3>
      <div className="box-stick"></div>
      <h3>{value}</h3>
    </div>
  );
};

export default Box;
