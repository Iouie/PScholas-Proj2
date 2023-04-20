import { useLocation } from "react-router";
import { useEffect } from "react";

const GameItem = (props) => {
  const { state } = useLocation();

  useEffect(() => {
    props.getUrl("game");
    props.getParams(state);
  }, []);

  const loading = () => {
    return <h1>Game details loading</h1>;
  };

  const loaded = () => {
    return (
      <div className="singlegamecontainer" key={state.id}>
        <h2>{props.data.title}</h2>
        <img
          src={props.data.thumbnail}
          className="singlegame"
          alt={props.data.title}
        />
        <p dangerouslySetInnerHTML={{ __html: props.data.description }} />
        {/* <div className="requirements">
          <h3>Minimum Requirements</h3>
          <p>OS: {props.data.minimum_system_requirements.os}</p>
          <p>Processor: {props.data.minimum_system_requirements.processor}</p>
          <p>Memory: {props.data.minimum_system_requirements.memory}</p>
          <p>
            Graphics Card: {props.data.minimum_system_requirements.graphics}
          </p>
          <p>Storage: {props.data.minimum_system_requirements.storage}</p>
        </div> */}
      </div>
    );
  };

  // console.log(Object.keys(props.data.minimum_system_requirements));
  // console.log(props.data);

  return props.data ? loaded() : loading();
};

export default GameItem;
