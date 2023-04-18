const Inputs = (props) => {
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
      <input type="text" maxLength="20" placeholder="Enter Game Here" />
    </div>
  );
};

export default Inputs;
