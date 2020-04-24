import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import SingleDonut from "./singleDonut";

const Donut = (props) => {
  const { id, name, image, review, description } = props.donut;
  return (
    <div key={id} className="Donuts">
      <div className="img-wrapper">
        <img className="donut-img" src={image} alt="Donut" />
      </div>
      <a>{name}</a>
      <p>{description}</p>
      <p>{review}</p>
    </div>
  );
};
export default Donut;
