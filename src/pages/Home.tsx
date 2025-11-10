import React from "react";
import Header from "../Components/Header";
import LuxurycarsonRent from "../Components/LuxurycarsonRent";
import FeacherdCar from "../Components/feacherdCar";
import ListYourCar from "../Components/ListYourCar";

const Home = () => {
  return (
    <div className=" h-full">
      <Header />
      <LuxurycarsonRent />
      <FeacherdCar />
      <ListYourCar />
    </div>
  );
};

export default Home;
