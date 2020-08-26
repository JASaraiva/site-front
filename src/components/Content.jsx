import React from "react"
import About from "./content/About"
import Contact from "./content/Contact"
import Portfolio from "./content/Portfolio"
import Profile from "./content/Profile"

export default props =>
    <div className="container">
        <About></About>
        <Profile></Profile>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </div>
