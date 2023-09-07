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
        className="flex flex-col items-center mx-auto p-4 gap-x-4 my-2 md:w-1/3 border-dotted border-2 border-sky-500 hover:bg-sky-700 cursor-pointer w-full"
        key={eachGame.id}
        onClick={() => {
          // navigate to GameItem component
          navigate(`/games/${eachGame.id}`);
        }}
      >
        <p className="md:text-3xl underline py-2 text-sm">{eachGame.title}</p>
        <img
          src={eachGame.thumbnail}
          className="gamethumbnail"
          alt={eachGame.title}
        />
        <p className="md:text-base text-center text-white text-[0.6rem] my-1">
          <span>Description:</span> {eachGame.short_description}
        </p>
        <p className="md:text-base text-center text-white text-[0.6rem] my-1">
          <span>Genre:</span> {eachGame.genre}
        </p>
        <p className="md:text-base text-center text-white text-[0.6rem] my-1">
          <span>Platform:</span> {eachGame.platform}
        </p>
        <p className="md:text-base text-center text-white text-[0.6rem] my-1">
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
      <p className="text-[#93deff] text-center">Current Page: {currentPage}</p>
      <div className="flex flex-wrap">
        {allGames.length !== 0 ? allGames : `No Games Found`}
      </div>
      <div className="fixed bottom-0 w-full">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="my-8 mx-10 px-5 py-2 bg-[#0e7490] text-white text-sm font-bold tracking-wide rounded-full z-50 md:w-[10rem] w-[5rem] hover:bg-opacity-50 cursor-pointer"
        >
          {currentPage}
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= numPages}
          className="bottom-0 my-8 px-5 py-2 bg-[#0e7490]  text-white text-sm font-bold tracking-wide rounded-full z-50 md:w-[10rem] w-[5rem] float-right mx-10 cursor-pointer hover:bg-opacity-50"
        >
          {currentPage + 1}
        </button>
      </div>
    </>
  );
};

export default Games;
