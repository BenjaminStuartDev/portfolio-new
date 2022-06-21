import React from "react";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function Button({ className, event, name }) {
  return (
    <>
      <button
        className={`${className} hover:bg-blue-400 font-bold py-2 px-4 shadow-custom shadow-cornflower-blue hover:shadow-blue-500 rounded-2xl`}
        onClick={() => openInNewTab("https://google.com")}
      >
        {name}
      </button>
    </>
  );
}
