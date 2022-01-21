import React from "react";
import { BrowserRouter as Routes, Link,  } from 'react-router-dom';
import CampusCard from "./CampusCard";


export default function Campuses() {
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
            <h1 id="homeTitle"> Campus Listing</h1>

            <div id="campusBox">
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
                <CampusCard />
            </div>

        </div>
    )
}