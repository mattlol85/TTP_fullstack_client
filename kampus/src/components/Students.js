import React from "react";
import { Link } from "react-router-dom";
import './styles/Students.css'
import StudentCard from "./StudentCard";

export default function Students() {
    return (

        <div className="students">
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
            <h1 id="homeTitle"> Student Listing</h1>

            <div id="studentListing">
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />

            </div>
        </div>
    )
}

