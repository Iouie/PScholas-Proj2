import { useEffect } from "react";

const Giveaway = (props) => {
  useEffect(() => {
    props.getUrl("giveaways");
  }, []);

  // function that opens url into a new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // store the mapped array into a newsList variable
  const giveawayList = props.data.map((eachGiveaway) => {
    // map through each of the list and creates this
    return (
      <div
        className="newsContainer"
        key={eachGiveaway.id}
        onClick={() => openInNewTab(eachGiveaway.giveaway_url)}
      >
        <img
          src={eachGiveaway.thumbnail}
          className="thumbnail"
          alt={eachGiveaway.title}
        />
        <div className="details">
          <h2 className="newstitle">{eachGiveaway.title}</h2>
          <p className="description">{eachGiveaway.short_description}</p>
          <p className="keysleft">Keys Left: {eachGiveaway.keys_left}</p>
        </div>
      </div>
    );
  });
  return <>{giveawayList}</>;
};

export default Giveaway;
