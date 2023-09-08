import { useEffect } from "react";
import { Dropdown } from "flowbite-react";

const Inputs = (props) => {
  useEffect(() => {
    // set number of pages based off filteredData length / 20 and round it up
    props.setnumPages(Math.ceil(props.filteredData.length / 20));
  }, [props]);

  return (
    <div className="flex justify-center my-2 gap-x-2 flex-col items-center gap-y-2 md:flex-row md:gap-y-0">
      <Dropdown label="Sort By" className="cursor-pointer">
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ "sort-by": "relevance" });
            }}
          >
            Relevance
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ "sort-by": "alphabetical" });
            }}
          >
            Alphabetical
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ "sort-by": "release-date" });
            }}
          >
            Release-Date
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ "sort-by": "popularity" });
            }}
          >
            Popularity
          </li>
        </Dropdown.Header>
      </Dropdown>

      <Dropdown label="Genres" className="cursor-pointer">
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "mmorpg" });
            }}
          >
            MMORPG
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "mmo" });
            }}
          >
            MMO
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "fantasy" });
            }}
          >
            Fantasy
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "tower-defense" });
            }}
          >
            Tower-Defense
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "shooter" });
            }}
          >
            Shooter
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "moba" });
            }}
          >
            MOBA
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "racing" });
            }}
          >
            Racing
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "sports" });
            }}
          >
            Sports
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "sandbox" });
            }}
          >
            Sandbox
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "open-world" });
            }}
          >
            Open-World
          </li>
        </Dropdown.Header>
        <Dropdown.Header>
          <li
            className="hover:bg-sky-700"
            onClick={() => {
              props.setCurrentPage(1);
              props.getParams({ category: "battle-royale" });
            }}
          >
            Battle-Royale
          </li>
        </Dropdown.Header>
      </Dropdown>

      <div className="sm:w-1/3 text-center">
        <input
          type="text"
          maxLength={20}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Game Title Here"
          value={props.searchTerm}
          onChange={(e) => {
            props.setSearchTerm(e.target.value); // change search term to whatever I type
            props.setCurrentPage(1); // set current page to 1 everytime I type
          }}
        />
      </div>
    </div>
  );
};

export default Inputs;
