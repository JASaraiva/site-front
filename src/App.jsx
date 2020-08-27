import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"


//----------- CSS -------------------
import "./assets/css/business-frontpage.css"
import "./assets/css/gallery.css"
import "./assets/css/social.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"

export default props =>
    <>
        <Navbar></Navbar>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </>