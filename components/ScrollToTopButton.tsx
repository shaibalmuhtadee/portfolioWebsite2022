import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 text-2xl transition-transform duration-150 rounded-md shadow hover:ring hover:scale-110 focus:ring ring-black dark:ring-light_primary dark:bg-dark_secondary bg-light_secondary text-dark_primary dark:text-light_primary"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
