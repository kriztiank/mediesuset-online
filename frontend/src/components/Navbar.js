import React from "react"
import logo from "../assets/logo.png"
import PageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <PageLinks styleClass="nav-links"></PageLinks>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
