import { useState, useEffect } from "react";

const Games = (props) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  useEffect(() => {
    props.getUrl("games"); // change url to games so api fetches game
  }, []);

  const currentData = props.data.slice(startIndex, endIndex); // hold only 20 per page

  const handleNextPage = () => {
    // put in button to click on next page
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    // put in button to click on previous page
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="maingamecontainer">
        {currentData.map((eachGame) => {
          // map through each of the list and creates this
          return (
            <div className="gameContainer" key={eachGame.id}>
              <h2>{eachGame.title}</h2>
              <img
                src={eachGame.thumbnail}
                className="gamethumbnail"
                alt={eachGame.title}
              />
              <p className="gamedescription">
                <span>Description:</span> {eachGame.short_description}
              </p>
              <p className="gamegenre">
                <span>Genre:</span> {eachGame.genre}
              </p>
              <p className="gameplatform">
                <span>Platform:</span> {eachGame.platform}
              </p>
            </div>
          );
        })}
      </div>
      <div className="allbutton">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="nextbutton"
        >
          {currentPage}
        </button>
        <p>Current Page: {currentPage}</p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === 19}
          className="previousbutton"
        >
          {currentPage + 1}
        </button>
      </div>
    </>
  );
};

export default Games;
