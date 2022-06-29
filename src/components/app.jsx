import { useState } from "react";
import Page from "./page.jsx";
import Hero from "./hero.jsx";
import Header from "./header.jsx";
import Button from "./button.jsx";
import Codeblock from "./codeblock.jsx";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function App() {
  return (
    <>
      {/* create navbar component */}
      {/* create social media component */}
      <Page className="bg-mine-shaft">
        <Hero name="Benjamin Stuart" role="Junior Software Developer" />
      </Page>
      <Page className="bg-wild-sand">
        <Header text="> Hi" />
        <p className="font-open-sans sm:text-lg md:text-1xl lg:text-2xl tracking-[0.1rem] pt-[1rem] pb-[2rem]">
          My name is Ben. I am a Coder Academy student with an interest in UI/UX
          design and a passion for helping people by building accessible and
          beautiful websites.
        </p>
        <Codeblock />
        <div className="w-full flex justify-end pt-4">
          <Button
            name="Resume >>"
            className="bg-mine-shaft text-wild-sand"
            event={() => openInNewTab("https://google.com")}
          />
        </div>
      </Page>
      <Page className="bg-wild-sand">
        <Header text="> Projects" />
        {/* create project component */}
        {/* create carasel wheel component */}
      </Page>
      <Page className="bg-mine-shaft">
        <Header text="> Contact" className="text-wild-sand" />
        {/* create form card component */}
        {/* Create button component */}
      </Page>
    </>
  );
}

export default App;
