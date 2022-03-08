import React from "react";

function Button({ filter, button }) {
  return (
    <div>
      {button.map((but, i) => {
        return <button key={i}>{but}</button>;
      })}
    </div>
  );
}

export default Button;
