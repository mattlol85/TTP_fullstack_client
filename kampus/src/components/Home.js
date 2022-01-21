import React from "react";
import { Link } from "react-router-dom";
import './styles/Home.css'

export default function Home() {

    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
            <div className="appNav">
                <ul id="navList">
                    <li >
                        <Link to="/" id="linkElement" >Home</Link>
                    </li>
                    <li >
                        <Link to="/campuses" id="linkElement">Campuses</Link>
                    </li>
                    <li >
                        <Link to="/students" id="linkElement">Students</Link>
                    </li>
                </ul>
            </div>
            <h1 id="homeTitle"> Home</h1>

        </div>
    )
}

