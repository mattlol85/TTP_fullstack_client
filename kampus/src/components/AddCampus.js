import React from "react";
import { Link } from "react-router-dom";
import './styles/AddCampus.css'

export default function AddCampus() {

    // Hooks

    return (
        <div className="addCampus">
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

            <h1 id="Add Campus"> Add Campus</h1>

        </div>
    )
}

