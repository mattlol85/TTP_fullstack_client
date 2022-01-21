import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'



export default function Campuses() {
    return (
        <div id="campus">
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
            <h1>CAMPUS TITLE</h1>
            <div className="campusInfo">
                Info about campus.Info about campus.Info about campus.Info about campus.Info about campus.Info about campus.Info about campus.Info about campus.
                Info about campus.Info about campus.Info about campus.
            </div>
        </div>
    )
}