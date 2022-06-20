import { useState } from 'react'
import Page from './page.jsx'
import Hero from './hero.jsx'

function App() {
  return (
    <>
      {/* create navbar component */}
      {/* create social media component */}
      <Page bg='#222222'>
        <Hero name="Benjamin Stuart" role="Junior Software Developer"/>
      </Page>
      <Page bg='#F4F4F4' header="Hi">
        {/* create header component */}
        {/* Create welcome component */}
        {/* Create code stylized card component */}
        {/* Create button component */}
      </Page>
      <Page bg='#F4F4F4'>
        {/* create header component */}
        {/* create project component */}
        {/* create carasel wheel component */}
      </Page>
      <Page bg='#222222'>
        {/* create header component */}
        {/* create form card component */}
        {/* Create button component */}
      </Page>
    </>
  )
}

export default App
