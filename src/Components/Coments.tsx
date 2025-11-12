import React from "react";
import { motion } from "framer-motion";
type TcommentType = {
  firstName: string;
  address: string;
  image: string;
  children: React.ReactNode;
};
const Comments = ({ firstName, address, image, children }: TcommentType) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-4 p-6 shadow-xl rounded-2xl sm:w-full hover:-translate-y-1 duration-300"
    >
      <div className="flex gap-2  items-center">
        <div>
          <img className="w-12 h-12 " src={image} alt="" />
        </div>
        <div className="flex flex-col ">
          <p className="text-[20px]">{firstName}</p>
          <p className="text-[16px] text-gray-600">{address}</p>
        </div>
      </div>

      <div className="text-gray-500">{children}</div>
    </motion.div>
  );
};

export default Comments;
