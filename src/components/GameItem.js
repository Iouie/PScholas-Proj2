import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GameItem = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const pRef = useRef(null);
  const osRef = useRef(null);
  const procRef = useRef(null);
  const memRef = useRef(null);
  const gRef = useRef(null);
  const sRef = useRef(null);
  const secret_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
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
        pRef.current.innerHTML = response.data.description;
        osRef.current.innerHTML = `<span>OS:</span> ${response.data["minimum_system_requirements"]["os"]} `;
        procRef.current.innerHTML = `<span>Processor:</span> ${response.data["minimum_system_requirements"]["processor"]} `;
        memRef.current.innerHTML = `<span>Memory:</span> ${response.data["minimum_system_requirements"]["memory"]} `;
        gRef.current.innerHTML = `<span>Graphics Card:</span> ${response.data["minimum_system_requirements"]["graphics"]} `;
        sRef.current.innerHTML = `<span>Storage:</span> ${response.data["minimum_system_requirements"]["storage"]} `;
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  // console.log(data);

  const loading = () => {
    return <h1>Game details loading</h1>;
  };
  const loaded = () => {
    return (
      <div className="singlegamecontainer" key={data.id}>
        <h1>{data.title}</h1>
        <img src={data.thumbnail} className="singlegame" alt={data.title} />
        <Link to={data.game_url} target="_blank">
          <button className="gameurl">Click Here to Play</button>
        </Link>
        <p ref={pRef} className="longdesc"></p>
        <div className="requirements">
          <h2 className="minreq">Minimum Requirements</h2>
          <p ref={osRef}></p>
          {/* <p>{data["minimum_system_requirements"]["storage"]}</p> */}
          <p ref={procRef}></p>
          <p ref={memRef}></p>
          <p ref={gRef}></p>
          <p ref={sRef}></p>
        </div>
      </div>
    );
  };

  return data ? loaded() : loading();
};

export default GameItem;
