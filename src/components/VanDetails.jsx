import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const VanDetails = () => {
  const params = useParams();
  const [van, setVans] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [params.id]);
  const typeColors = {
    simple: "bg-[#E17654] text-white",
    rugged: "bg-[#115E59] text-white",
    luxury: "bg-[#161616] text-white",
  };
  return (
    <div>
      {van ? (
        <div className="flex flex-col gap-2 m-4">
          <img src={van.imageUrl} />
          <i
            className={`${
              typeColors[van.type]
            } p-2 cursor-pointer w-20 rounded-sm`}
          >
            {van.type}
          </i>
          <h2 className="text-2xl font-black">{van.name}</h2>
          <p className="text-xl">
            <span className="font-black">${van.price}</span>/day
          </p>
          <p className="font-bold">{van.description}</p>
          <button className="bg-[#FF8C38] p-2 text-white rounded-sm font-bold">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
