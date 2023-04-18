import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import News from "./pages/News";
import Games from "./pages/Games";
import GameItem from "./components/GameItem";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("latestnews");
  const [params, setParams] = useState({});
  const secret_key = process.env.REACT_APP_API_KEY;

  // need to create function to pass down to childprops
  const changeUrl = (url) => {
    setUrl(url);
  };

  const changeParams = (p) => {
    setParams(p);
  };

  // fetch data from api
  const options = {
    method: "GET",
    url: `https://mmo-games.p.rapidapi.com/${url}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": secret_key,
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setData(response.data); // store this in the news variable
      //   console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News data={data} getUrl={changeUrl} />} />
        <Route
          path="/games"
          element={
            <Games data={data} getUrl={changeUrl} getParams={changeParams} />
          }
        />
        <Route path="/games/:game" element={<GameItem />} />
      </Routes>
    </>
  );
};

export default App;
