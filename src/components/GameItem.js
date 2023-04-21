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
        <div className="singlegamecontainer" key={data.id}>
          <h1>{data.title}</h1>
          <img src={data.thumbnail} className="singlegame" alt={data.title} />
          <Link to={data.game_url} target="_blank">
            <button className="gameurl">Click Here to Play</button>
          </Link>
          <p
            className="longdesc"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div className="requirements">
            <h2 className="minreq">Minimum Requirements</h2>
            <p>OS: {data["minimum_system_requirements"]["os"]}</p>
            <p>Processor: {data["minimum_system_requirements"]["processor"]}</p>
            <p>Memory: {data["minimum_system_requirements"]["memory"]}</p>
            <p>
              Graphics Card: {data["minimum_system_requirements"]["graphics"]}
            </p>
            <p>Storage: {data["minimum_system_requirements"]["storage"]}</p>
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
            <button className="gameurl">Click Here to Play</button>
          </Link>
          <p
            className="longdesc"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {/* <SSCarousel screenshots={data.screenshots} /> */}
        </div>
      );
  };

  return data ? loaded() : loading();
};

export default GameItem;
