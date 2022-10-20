import React, { useState } from "react";

const Button = ({ btnText }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        console.log("button clicked", btnText);
        setCount((prev) => prev + 1);
      }}
    >
      {btnText} : {count}
    </button>
  );
};

export default Button;
