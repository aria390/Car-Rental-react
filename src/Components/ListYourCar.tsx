import React from "react";
import listCar from "../img/banner_car_image-B9uXTQkB.png";

const ListYourCar = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-4 bg-linear-to-r from-[#0558fe] to-[#a9cfff] px-4 rounded-xl py-8 h-full">
        <div className="text-white flex- flex-col">
          <h1 className="text-3xl">Do You Own a Luxury Car?</h1>
          <p>
            Monetize your vehicle effortlessly by listing it on CarRental. <br /> We
            take care of insurance, driver verification and secure payments — so
            you can earn passive income, stress-free.
          </p>
          <button>List your car</button>
        </div>
        <img src={listCar} alt="" />
      </div>
    </div>
  );
};

export default ListYourCar;
