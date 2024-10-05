import React, { FC } from "react";
import Item from "./item";
import { motion } from "framer-motion";

const Experience: FC = () => {
  const experience = [
    {
      title: "Robotics Software Engineering Intern",
      place: "Zebra Technologies",
      date: "May 2023 - Sept 2024",
    },
    {
      title: "Classroom Ambassador",
      place: "University of Toronto",
      date: "Sept 2022 - Apr 2023",
    },
  ];

  return (
    <div
      className="px-6 pt-4 text-black cursor-default md:pt-12 dark:text-light_primary font-Rubik"
      id="experience"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
      >
        <h2 className="px-2 py-5 text-4xl font-bold">Experience</h2>
      </motion.div>
      <div className="mx-2 pt-28 md:pt-6 space-y-36 md:space-y-14">
        <ul>
          {experience.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              place={item.place}
              date={item.date}
              first={index === 0}
              last={index === experience.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
