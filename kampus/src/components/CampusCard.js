import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import './styles/CampusCard.css'


export default function CampusCard() {
    return (
        <div className="campusCard">
            <div>
                <img className="campusImg" src="https://media.istockphoto.com/photos/quandrangle-lawn-at-the-university-of-washington-picture-id157505397?s=612x612" />
            </div>
            <div>
                <h1 id="campusTitle">TEST COLLEGE</h1>
                <h2 id="campusStudents">0 Students</h2>
            </div>
        </div>
    )
}