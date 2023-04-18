import { useEffect } from "react";

const NewsItem = (props) => {
  useEffect(() => {
    props.getUrl("latestnews");
  }, []);

  // function that opens url into a new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // store the mapped array into a newsList variable
  const newsList = props.data.map((eachNews) => {
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
