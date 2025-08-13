import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <img className="h-64 object-cover w-screen" src="/about.png" />
      </div>
      <div className="flex flex-col m-4 gap-5 ">
        <h1 className="text-3xl font-black">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-[#FFCC8D] w-80 p-4 rounded-sm m-2">
          <h1>Your destination is waiting. Your van is ready.</h1>
          <button className="rounded-sm bg-black text-white p-2 mt-2 font-bold cursor-pointer">
            Explor Our vans
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
