import React, { useState } from "react";
import logoHeader from "../img/logoH.svg";
import listHeader from "../img/listHeader.svg";
import clsx from "clsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full">
      <div className="w-full h-14 bg-[#F1F5F9] flex justify-between items-center px-5 border-b-1 border-gray-400">
        <a href="/"><img className="w-40 h-30" src={logoHeader} alt="" /></a>
        <img
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
          className="w-5 h-4 cursor-pointer"
          src={listHeader}
          alt=""
        />
      </div>
      <ul
        className={clsx(
          "bg-[#F1F5F9] w-full transition-all fixed h-full flex flex-col gap-2 *:pl-4 *:text-gray-600 pt-4",
          {
            "-right-full": !open,
            "right-0": open,
          }
        )}
      >
        <li>Home</li>
        <li>Cars</li>
        <li>My Booking</li>
        <li>List cars</li>
        <li>Login</li>
      </ul>
    </header>
  );
};

export default Header;
