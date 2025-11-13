import React from "react";
import Header from "../Components/Header";
import LuxurycarsonRent from "../Components/LuxurycarsonRent";
import FeacherdCar from "../Components/FeacherdCar";
import ListYourCar from "../Components/ListYourCar";
import What_Our_Customers_Say from "../Components/What_Our_Customers_Say";
import Deal from "../Components/Deal";
import Footer from "../Components/Footer";
import Login from "../Components/Login";

const Home = () => {
  return (
    <div className=" h-full">
      <Header />
      <Login />
      <LuxurycarsonRent />
      <FeacherdCar />
      <ListYourCar />
      <What_Our_Customers_Say />
      <Deal />
      <Footer />
    </div>
  );
};

export default Home;
