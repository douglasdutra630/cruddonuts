import React, { useEffect, useState } from "react";

import "../style/main";
import Donut from "./donuts";
import Navbar from "./product"

export default function Products() {
  const [donuts, setDonuts] = useState([]);

  const renderdonuts = () => {
    return donuts.map((donut) => {
      return <Donut key={donut.id} donut={donut} />;
    });
  };

  const getdonuts = () => {
    fetch("https://cruddonuts.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setDonuts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdonuts();
  }, []);

  return (
      <div className="app">
        {renderdonuts()}
      </div>
  )
}
