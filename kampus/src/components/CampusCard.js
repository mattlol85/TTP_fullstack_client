import React from "react";
import './styles/CampusCard.css'


export default function CampusCard() {
    return (
        <div className="campusCard">
            <div>
                <img className="campusImg" alt="A college." src="https://media.istockphoto.com/photos/quandrangle-lawn-at-the-university-of-washington-picture-id157505397?s=612x612" />
            </div>
            <div>
                <h1 id="campusTitle">TEST COLLEGE</h1>
                <h2 id="campusStudents">0 Students</h2>
            </div>

            <div>
                <button>Edit </button>
                <button>Delete </button>
            </div>

        </div>
    )
}