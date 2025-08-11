import React from "react";

const Home = () => {
  return (
    <div className="bg-[url('/home.png')] bg-cover bg-center h-screen text-white flex flex-col justify-center items-center gap-7">
      <div className="text-5xl font-bold">
        You got the travel plans, we got the travel vans.
      </div>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="p-2 w-80 rounded-sm font-bold bg-[#FF8C38] cursor-pointer">
        Find your van
      </button>
    </div>
  );
};

export default Home;
