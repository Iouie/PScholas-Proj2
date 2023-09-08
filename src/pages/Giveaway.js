import { useEffect } from "react";

const Giveaway = (props) => {
  useEffect(() => {
    props.getUrl("giveaways");
  }, []);

  // function that opens url into a new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // store the mapped array into a giveaway variable
  const giveawayList = props.data.map((eachGiveaway) => {
    // map through each of the list and creates this
    return (
      <div
        className="flex border-dotted border-2 flex-col items-center my-4 mx-auto border-sky-500 hover:bg-sky-700 cursor-pointer w-2/3"
        key={eachGiveaway.id}
        onClick={() => openInNewTab(eachGiveaway.giveaway_url)}
      >
        <img
          src={eachGiveaway.thumbnail}
          className="w-[20rem]"
          alt={eachGiveaway.title}
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-center  text-[0.6rem] md:text-[1.2rem]">
            {eachGiveaway.title}
          </h2>
          <p className="text-white text-center text-[0.6rem] md:text-[.8rem]">
            {eachGiveaway.short_description}
          </p>
          <p className="text-center">
            Keys Left:
            <span
              className={` text-[.6rem] md:text-[.8rem] ${
                parseFloat(eachGiveaway.keys_left) < 50
                  ? "text-red-700"
                  : "text-green-700"
              }`}
            >
              {eachGiveaway.keys_left}
            </span>
          </p>
        </div>
      </div>
    );
  });
  return <>{giveawayList}</>;
};

export default Giveaway;
