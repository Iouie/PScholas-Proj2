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
      <div className="home">
        <div className="left">
          <img src={Genie} alt="GenieGif"></img>
        </div>
        <div className="right">
          <h2>GET THE LATEST</h2>
          <h2 style={animationStyle} className="alttext">
            {texts[textIndex]}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
