import React from "react";
import Emoji from "./emoji";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const intro = () => {
  return (
    <div
      className="px-6 pt-4 text-black cursor-default md:pt-24 dark:text-light_primary font-Rubik"
      id="intro"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
        className="rounded-full w-44 h-44 md:w-52 md:h-52 ring ring-black dark:ring-light_primary"
      >
        <img
          className="rounded-full w-44 h-44 md:w-52 md:h-52"
          src="/picture.gif"
          alt="author"
        />
      </motion.div>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
        className="flex-wrap px-2 pt-8 pb-2 text-5xl font-bold md:pt-12 md:flex"
      >
        Hi, I&apos;m Shai!&nbsp;
        <span className="inline-block">
          <Emoji symbol="👋" label="wave" />
        </span>
      </motion.h1>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
        className="px-2 py-5 text-3xl font-bold md:text-4xl text-light_gray_custom dark:text-dark_gray_custom"
      >
        I am an aspiring software engineer and computer engineering student at
        the{" "}
        <span className="inline-block cursor-pointer bg-light_highlight/40 dark:bg-dark_highlight/30 link-underline link-underline-highlight">
          <a href="https://www.utoronto.ca/">University of Toronto</a>
        </span>
        . I am seeking new grad offers for May 2025, check out my{" "}
        <span className="inline-block cursor-pointer dark:text-dark_highlight text-light_highlight link-underline link-underline-highlight">
          <a href="Shaibal_Muhtadee_Resume.pdf" target="_blank">
            resume
          </a>
        </span>
      </motion.h2>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
        className="flex px-2 space-x-5 text-4xl cursor-pointer"
      >
        <div className="transition-transform duration-150 ease-in-out hover:scale-110 hover:rotate-12">
          <Link href="https://github.com/shaibalmuhtadee">
            <a>
              <FaGithub />
            </a>
          </Link>
        </div>

        <div className="transition-transform duration-150 ease-in-out hover:scale-110 hover:rotate-12">
          <Link href="https://www.linkedin.com/in/shaibalmuhtadee/">
            <a>
              <FaLinkedin />
            </a>
          </Link>
        </div>

        <div className="transition-transform duration-150 ease-in-out text-3-5xl hover:scale-110 hover:rotate-12">
          <Link href="mailto: shaibalmuhtadee@gmail.com">
            <a>
              <GrMail />
            </a>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
      >
        <h3 className="px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom">
          I love learning the logic behind complex software programs and
          developing powerful interactive apps.
        </h3>
        <h3 className="px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom">
          My technology stack includes:&nbsp;
          <span className="inline-block transition-colors duration-200 ease-in hover:text-python_color">
            Python
          </span>
          ,&nbsp;
          <span className="inline-block transition-colors duration-200 ease-in hover:text-typescript_color">
            TypeScript
          </span>
          ,&nbsp;
          <span className="inline-block transition-colors duration-200 ease-in hover:text-cplusplus_color">
            C++
          </span>
          ,&nbsp;
          <span className="inline-block transition-colors duration-200 ease-in hover:text-rust_color">
            Rust
          </span>
        </h3>
      </motion.div>
    </div>
  );
};

export default intro;
