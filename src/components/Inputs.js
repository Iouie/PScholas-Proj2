import { useEffect } from "react";

const Inputs = (props) => {
  useEffect(() => {
    // set number of pages based off filteredData length / 20 and round it up
    props.setnumPages(Math.ceil(props.filteredData.length / 20));
  }, [props]);

  return (
    <div className="eight-bit">
      <li className="hov">
        Sort By
        <ul className="main">
          <li
            onClick={() => {
              props.getParams({ "sort-by": "relevance" });
            }}
          >
            Relevance
          </li>
          <li
            onClick={() => {
              props.getParams({ "sort-by": "alphabetical" });
            }}
          >
            Alphabetical
          </li>
          <li
            onClick={() => {
              props.getParams({ "sort-by": "release-date" });
            }}
          >
            Release-Date
          </li>
          <li
            onClick={() => {
              props.getParams({ "sort-by": "popularity" });
            }}
          >
            Popularity
          </li>
        </ul>
      </li>
      <li className="hov">
        Genres
        <ul className="main">
          <li
            onClick={() => {
              props.getParams({ category: "mmorpg" });
            }}
          >
            MMORPG
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "mmo" });
            }}
          >
            MMO
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "fantasy" });
            }}
          >
            Fantasy
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "tower-defense" });
            }}
          >
            Tower-Defense
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "shooter" });
            }}
          >
            Shooter
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "moba" });
            }}
          >
            MOBA
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "racing" });
            }}
          >
            Racing
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "sports" });
            }}
          >
            Sports
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "sandbox" });
            }}
          >
            Sandbox
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "open-world" });
            }}
          >
            Open-World
          </li>
          <li
            onClick={() => {
              props.getParams({ category: "battle-royale" });
            }}
          >
            Battle-Royale
          </li>
        </ul>
      </li>
      <input
        type="text"
        maxLength="20"
        placeholder="Enter Game Title Here"
        value={props.searchTerm}
        onChange={(e) => {
          props.setSearchTerm(e.target.value); // change search term to whatever I type
          props.setCurrentPage(1); // set current page to 1 everytime I type
        }}
      />
    </div>
  );
};

export default Inputs;
