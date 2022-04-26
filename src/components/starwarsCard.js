import { useState } from "react";

function Card(props) {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    // console.log("div clicked");
    setClicked(true);
  };

  return (
    <div className="planets-Div" onClick={handleOnClick}>
      {clicked === true ? (
        <div>
          <p>
            <span id="insideSpan">Name </span>
            {props.name}
          </p>
          <p>
            <span id="insideSpan">rotation_period </span>
            {props.model}
          </p>
          <p>
            <span id="insideSpan">orbital_period </span>
            {props.shipClass}
          </p>

          <p>
            <span id="insideSpan">diameter </span>
            {props.hyperdrive}
          </p>
          <p>
            <span id="insideSpan">climate </span>
            {props.cargoCap}
          </p>
          <p>
            <span id="insideSpan">gravity </span>
          </p>
          <p>
            <span id="insideSpan">terrain</span>
          </p>
          <p>
            <span id="insideSpan">surface_water</span>
          </p>
          <p>
            <span id="insideSpan">population</span>
          </p>
          <p>
            <span id="insideSpan">residents</span>
          </p>
        </div>
      ) : (
        <div className="div-simple">{props.name}</div>
      )}
    </div>
  );
}
export default Card;

//    <p>
// <span id="insideSpan">URL </span>
// {props.url}
// </p>
