import React, { useState } from "react";

const Button = ({ btnText }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        console.log("button clicked", btnText);
        setCount((prev) => prev + 1);
      }}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      {btnText} : {count}
    </button>
  );
};

export default Button;
