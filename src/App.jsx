import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"


//----------- CSS -------------------
import "./css/business-frontpage.css"
import "./css/gallery.css"
import "./css/social.css"
import "./vendor/bootstrap/css/bootstrap.min.css"

export default props =>
    <>
        <Navbar></Navbar>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </>