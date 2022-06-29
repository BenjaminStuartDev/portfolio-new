import React from "react";

function Codeblock() {
  const content = {
    languages: ["Javascript", "Ruby", "C", "Python", "Scss", "HTML"],
    keySkills: [
      "Agile Development",
      "Test Driven Development",
      "Figma Designs",
      "Coding & Troubleshooting",
    ],
    keyTools: ["Ruby on rails", "React", "Bootstrap", "Heroku", "PostgreSQL"],
  };

  return (
    <div className="w-full rounded-2xl bg-mine-shaft p-3">
      <div className="flex space-x-1 lg:space-x-2 pb-3">
        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
      <div className="font-roboto-mono text-wild-sand flex">
        <div className="flex overflow-x-auto overflow-hidden relative">
          <div className="flex flex-col text-terminal-grey absolute">
            {[...Array(14)].map((element, index) => (
              <span>{index + 1}</span> 
            ))}
          </div>
          <div id="let" className="h-full pl-6 pr-2">
            <p>let</p>
          </div>
          <div id="content-wrapper">
            {Object.keys(content).map((key, index) => (
              <div id={`${key}-wrapper`} className="flex pb-[1.5em]">
                <div className="whitespace-nowrap pr-2">{key} =</div>
                <div className="flex flex-wrap">
                  [
                  {content[key].map((item, index) => (
                    <div className="whitespace-nowrap">
                      <span className="text-cornflower-blue">"{item}"</span>
                      {index == content[key].length - 1 ? "]" : ","}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Codeblock;

