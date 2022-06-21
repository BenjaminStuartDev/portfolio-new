import { useState } from "react";
import Page from "./page.jsx";
import Hero from "./hero.jsx";
import Header from "./header.jsx";
import Button from "./button.jsx"

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
        <p className="font-open-sans text-2xl tracking-[0.1rem] py-[1rem]">
          My name is Ben. I am a Coder Academy student with an interest in UI/UX
          design and a passion for helping people by building accessible and
          beautiful websites.
        </p>
        {/* Create code stylized card component */}
        <Button name="Resume >>" className="bg-mine-shaft text-wild-sand"/>
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
