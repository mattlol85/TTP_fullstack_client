import React from "react";
import { useState } from "react"
import {Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import CampusCard from "./CampusCard";
import './styles/Campuses.css'

export default function Campuses() {
    const [state, setState] = useState({redirect: false})

    function handleChange() {
        setState({redirect: true})
        console.log("clicked")
    }
    if (state.redirect) {
        return(<Navigate to="/AddCampus"/>)
    }


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

            <div>
            <button id="addCampusButton" onClick={() => handleChange()}> Add Campus</button>

            <h1 id="homeTitle"> Campus Listing</h1>

            </div>
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