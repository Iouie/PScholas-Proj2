import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import News from "./pages/News";
import Games from "./pages/Games";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("games");

  // need to create function to pass down to childprops
  const changeUrl = (url) => {
    setUrl(url);
  };

  // fetch data from api
  const options = {
    method: "GET",
    url: `https://mmo-games.p.rapidapi.com/${url}`,
    headers: {
      "X-RapidAPI-Key": "3a9e06ea1bmsh011dc3857e0dbbdp1c6c49jsn1a19b90be73b",
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
          element={<Games data={data} getUrl={changeUrl} />}
        />
      </Routes>
    </>
  );
};

export default App;
