import React from "react";
import Header from "../Components/Header";
import Login from "../Components/Login";
import Available_Cars from "../Components/Available_Cars";
import FeacherdCar_CarMenu from "../Components/FeacherdCar_CarMenu";
import Footer from "../Components/Footer";

const Cars = () => {
  return (
    <div>
      <Header />
      <Login />
      <Available_Cars />
      <FeacherdCar_CarMenu />
      <Footer />
    </div>
  );
};

export default Cars;
