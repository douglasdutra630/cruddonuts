import React from "react";
const Donut = (props) => {
  const { id, name, image, review, description } = props.donut;
  return (
    <div key={id} className="Donuts">
      <div className="img-wrapper">
        <img className="donut-img" src={image} alt="Donut" />
      </div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{review}</p>
    </div>
  );
};
export default Donut;
