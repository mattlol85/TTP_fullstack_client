import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css'
import App from "../App";
export default function Navbar() {
    return (
        <nav id="navbar">
            <h1 id="navBarTitle">Bank Of React</h1>
            <div className="navBarItem">
                <Link to="/" classname="nav-link" element={<App/>}>Home</Link>
                <Link to="/about" classname="nav-link" element={<Navbar />}>test</Link>
                <Link to="/contact" classname="nav-link">test</Link>
            </div>
        </nav>
    )
}