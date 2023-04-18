import NewsItem from "../components/NewsItem";

const News = (props) => {
  return (
    <div>
      <NewsItem data={props.data} getUrl={props.getUrl} />
    </div>
  );
};

export default News;
