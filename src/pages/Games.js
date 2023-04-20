import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../components/Inputs";

const Games = (props) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [numPages, setnumPages] = useState(19);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const navigate = useNavigate();
  useEffect(() => {
    props.getUrl("games"); // change url to games so api fetches game
    setSearchTerm("");
  }, []);

  const filteredData = props.data.filter(
    (
      item // filter game based off what you type
    ) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentData = filteredData.slice(startIndex, endIndex); // hold only 20 games per page

  const handleNextPage = () => {
    // put in button to click on next page
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    // put in button to click on previous page
    setCurrentPage(currentPage - 1);
  };

  const allGames = currentData.map((eachGame) => {
    // map through each of the list and creates this
    return (
      <div
        className="gameContainer"
        key={eachGame.id}
        onClick={() => {
          // navigate to GameItem component
          navigate(`/games/${eachGame.id}`);
        }}
      >
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
        <p className="gamerelease">
          <span>Release Date:</span> {eachGame.release_date}
        </p>
      </div>
    );
  });
  return (
    <>
      <Inputs
        getParams={props.getParams}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        numPages={numPages}
        filteredData={filteredData}
        setnumPages={setnumPages}
        setCurrentPage={setCurrentPage}
      />
      <p className="pagenum">Current Page: {currentPage}</p>
      <div className="maingamecontainer">
        {allGames.length !== 0 ? allGames : `No Games Found`}
      </div>
      <div className="allbutton">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="nextbutton"
        >
          {currentPage}
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= numPages}
          className="previousbutton"
        >
          {currentPage + 1}
        </button>
      </div>
    </>
  );
};

export default Games;
