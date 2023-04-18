import { useEffect } from "react";

const Inputs = (props) => {
  useEffect(() => {
    // set number of pages based off filteredData length / 20 and round it up
    props.setnumPages(Math.ceil(props.filteredData.length / 20));
  });

  console.log(props.numPages);
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
      <input
        type="text"
        maxLength="20"
        placeholder="Enter Game Here"
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
