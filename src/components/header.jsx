import React from 'react'

export default function Header({text, className}) {
  return (
    <h1 className={`font-oswald text-6xl py-11 ${className}`}>{text}</h1>
  )
}