import React from "react";


export default function Button({ className, event, name }) {
  return (
      <button
        className={`${className} hover:bg-blue-400 font-bold py-2 px-4 shadow-custom shadow-cornflower-blue hover:shadow-blue-500 rounded-2xl`}
        onClick={event}
      >
        {name}
      </button>
  );
}
