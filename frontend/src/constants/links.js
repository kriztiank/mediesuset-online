// Link generator
import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "NYHEDER",
    url: "/",
  },
  {
    id: 2,
    text: "PROGRAM",
    url: "/stages/",
  },
  {
    id: 3,
    text: "LINEUP",
    url: "/artists/",
  },
  {
    id: 4,
    text: "CAMPS",
    url: "/camps/",
  },
  {
    id: 5,
    text: "INFO",
    url: "/about/",
  },
  {
    id: 6,
    text: "LOGIN",
    url: "/login/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
