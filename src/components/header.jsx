import React from 'react'

export default function Header({text, children}) {
  return (
    <section className="w-screen h-screen px-4 md:px-32 lg:px-48" style={{backgroundColor: bg}}>
      <div>{children}</div>
    </section>
  )
}