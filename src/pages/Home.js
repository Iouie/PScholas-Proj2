import Genie from "../assets/genie.gif";
import { useState, useEffect } from "react";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0); // get index of array of text
  const texts = [
    "GAMES",
    "GAMING NEWS",
    "GAME UPDATES",
    "GAMING INFORMATION",
    "GIVEAWAYS",
  ];
  const [animationStyle, setAnimationStyle] = useState({}); // get state for animation

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % texts.length); // iterates through arr of text
      setAnimationStyle({ animation: "fade-in 1s ease-in-out" });
      setTimeout(
        () => setAnimationStyle({ animation: "fade-out 1s ease-in-out" }),
        1000
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-y-6
      md:flex-row"
      >
        <img
          src={Genie}
          alt="GenieGif"
          className="w-1/2 h-1/2 md:w-1/3 md:h-1/3 mt-[10rem]"
        ></img>
        <div className="flex flex-col justify-center items-center md:mt-48">
          <h2 className="text-lg text-center md:text-4xl">GET THE LATEST</h2>
          <h2
            style={animationStyle}
            className="text-[#93deff] mt-4 text-center text-lg md:mt-0 md:text-4xl md:pt-20"
          >
            {texts[textIndex]}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
