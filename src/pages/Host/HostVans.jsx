import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link
      to={`/host/van/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div
        className="flex items-center bg-white p-[18px] mb-[15px] pl-[18px] "
        key={van.id}
      >
        <img
          className="h-[100px] mr-[17px] border-[5px] border-white"
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
        />
        <div className="text-sm">
          <h3 className="font-bold">{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="text-2xl m-2 font-bold">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
