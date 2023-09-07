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
        className="flex flex-col items-center mx-auto md:flex-row p-4 gap-x-4 my-2 w-2/3 border-dotted border-2 border-sky-500 hover:bg-sky-700 cursor-pointer"
        key={eachNews.id}
        onClick={() => openInNewTab(eachNews.article_url)}
      >
        <img
          src={eachNews.thumbnail}
          className="thumbnail"
          alt={eachNews.title}
        />
        <div className="py-4 text-center">
          <h2 className=" mb-4 text-base">{eachNews.title}</h2>
          <p className="text-xs text-white">{eachNews.short_description}</p>
        </div>
      </div>
    );
  });

  return <>{newsList}</>;
};

export default NewsItem;
