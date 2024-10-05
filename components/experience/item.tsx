import React, { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  place: string;
  date: string;
  last?: boolean;
  first?: boolean;
}

export const Item: FC<Props> = ({ title, place, date, last, first }) => {
  return (
    <motion.div
      className={`relative flex items-center ${!first ? "mt-14" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {!last && (
        <div
          className="absolute h-20 top-20 w-0.5 bg-black dark:bg-gray-500"
          style={{ left: "0.2rem" }}
        />
      )}
      <div className="w-2 h-2 bg-black rounded-full dark:bg-gray-500" />
      <div className="ml-8 dark:text-white-500 text-black-700">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-2xl font-medium ">{place}</p>
        <p className="text-lg mt-0.5 dark:text-white-500 text-light_gray_custom dark:text-dark_gray_custom">
          {date}
        </p>
      </div>
    </motion.div>
  );
};

export default Item;
