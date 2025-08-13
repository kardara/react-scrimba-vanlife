import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const typeColors = {
    simple: "bg-[#E17654] text-white",
    rugged: "bg-[#115E59] text-white",
    luxury: "bg-[#161616] text-white",
  };
  const vanElements = vans.map((el) => (
    <div key={el.id} className="m-2">
      <Link
        to={`/vans/${el.id}`}
        aria-label={`View details for ${el.name}, 
                             priced at $${el.price} per day`}
      >
        <img src={el.imageUrl} alt={`Image of ${el.name}`} />
        <div className="flex justify-between font-bold m-2">
          <h1>{el.name}</h1>
          <p>
            {el.price} <span className="font-normal">/day</span>
          </p>
        </div>
        <button
          className={`${
            typeColors[el.type]
          } p-2 cursor-pointer w-20 rounded-sm`}
        >
          {el.type}
        </button>
      </Link>
    </div>
  ));
  const button = ["Simple", "Luxury", "Rugged"];
  return (
    <div>
      <div className="m-5">
        <h1 className="text-xl font-bold m-2">Explore our van options</h1>
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 ml-2">
            {button.map((el) => (
              <button className="bg-[#FFEAD0] cursor-pointer p-3 text-[#4D4D4D] rounded-sm">
                {el}
              </button>
            ))}
          </div>
          <a className="border-b-1 cursor-pointer">Clear filters</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">{vanElements}</div>
    </div>
  );
};

export default Vans;
