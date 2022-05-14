import React from "react";

export const Button = (props) => {
  console.log("props:", props);
  return (
    <div>
      <button onClick={props.func}>{props.name}</button>
    </div>
  );
};

export default Button;
