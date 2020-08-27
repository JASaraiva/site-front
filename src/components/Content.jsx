import React from "react"
import About from "../pages/landpage/aboutus/About"
import Contact from "../pages/landpage/contact/Contact"
import Portfolio from "../pages/landpage/portfolio/Portfolio"
import Profile from "../pages/landpage/profile/Profile"

export default props =>
    <div className="container">
        <About></About>
        <Profile></Profile>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </div>
