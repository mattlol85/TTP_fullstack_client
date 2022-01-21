import React from "react";
import { Link } from "react-router-dom";
import './styles/Home.css'
import CampusCard from "./CampusCard";

export default function Home() {
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

