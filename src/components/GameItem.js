import { useParams } from "react-router";
// import SSCarousel from "./SSCarousel";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GameItem = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const secret_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    JSON.parse(storedData);
    // fetch data from api
    const options = {
      method: "GET",
      url: `https://mmo-games.p.rapidapi.com/game`,
      params: { id: id },
      headers: {
        "X-RapidAPI-Key": secret_key,
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data); // store this in the news variable
        // store data in localstorage
        localStorage.setItem("myData", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const loading = () => {
    return <h1>Game details loading</h1>;
  };
  const loaded = () => {
    if (data.hasOwnProperty("minimum_system_requirements")) {
      return (
        <div
          className="flex flex-col items-center md:w-2/3 mx-auto gap-y-2 w-3/4"
          key={data.id}
        >
          <h1 className="text-[1.4rem] md:text-[1.6rem] pt-2 underline">
            {data.title}
          </h1>
          <img src={data.thumbnail} className="w-[30rem]" alt={data.title} />
          <Link to={data.game_url} target="_blank">
            <button className="rounded-xl bg-blue-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200">
              Click Here to Play
            </button>
          </Link>
          <p
            className="md:text-[.8rem] text-[.6rem] text-[#93deff]"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div className="my-4 py-2 text-center">
            <h2 className="md:text-[1.2rem] text-[.8rem] underline">
              Minimum Requirements
            </h2>
            <p className="py-2 text-[.8rem]">
              OS:
              <span className="text-white text-[.6rem] md:text-[.8rem]">
                {data["minimum_system_requirements"]["os"]}
              </span>
            </p>
            <p className="py-2 text-[.8rem]">
              Processor:{" "}
              <span className="text-white text-[.6rem] md:text-[.8rem]">
                {data["minimum_system_requirements"]["processor"]}
              </span>
            </p>
            <p className="py-2 text-[.8rem]">
              Memory:{" "}
              <span className="text-white text-[.6rem] md:text-[.8rem]">
                {data["minimum_system_requirements"]["memory"]}
              </span>
            </p>
            <p className="py-2 text-[.8rem]">
              Graphics Card:{" "}
              <span className="text-white text-[.6rem] md:text-[.8rem]">
                {data["minimum_system_requirements"]["graphics"]}
              </span>
            </p>
            <p className="py-2 text-[.8rem]">
              Storage:{" "}
              <span className="text-white text-[.6rem] md:text-[.8rem]">
                {data["minimum_system_requirements"]["storage"]}
              </span>
            </p>
          </div>
          {/* <SSCarousel screenshots={data.screenshots} /> */}
        </div>
      );
    } else
      return (
        <div className="singlegamecontainer" key={data.id}>
          <h1>{data.title}</h1>
          <img src={data.thumbnail} className="singlegame" alt={data.title} />
          <Link to={data.game_url} target="_blank">
            <button className="rounded-xl bg-blue-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200">
              Blue
            </button>
          </Link>
          <p
            className="text-[.8rem] text-[#93deff]"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {/* <SSCarousel screenshots={data.screenshots} /> */}
        </div>
      );
  };

  return data ? loaded() : loading();
};

export default GameItem;
