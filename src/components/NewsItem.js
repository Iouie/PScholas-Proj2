import axios from "axios";
import { useState } from "react";

const NewsItem = (props) => {
  // create a state to store array of api list
  const [news, setNews] = useState([]);

  // fetch data from api
  const options = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/latestnews",
    headers: {
      "X-RapidAPI-Key": "3a9e06ea1bmsh011dc3857e0dbbdp1c6c49jsn1a19b90be73b",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setNews(response.data); // store this in the news variable
      //   console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // function that opens url into a new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // store the mapped array into a newsList variable
  const newsList = news.map((eachNews) => {
    // map through each of the list and creates this
    return (
      <div
        className="newsContainer"
        key={eachNews.id}
        onClick={() => openInNewTab(eachNews.article_url)}
      >
        <img
          src={eachNews.thumbnail}
          className="thumbnail"
          alt={eachNews.title}
        />
        <div className="details">
          <h2 className="newstitle">{eachNews.title}</h2>
          <p className="description">{eachNews.short_description}</p>
        </div>
      </div>
    );
  });

  return <>{newsList}</>;
};

export default NewsItem;
