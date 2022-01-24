import './styles/StudentCard.css'
import React, {useEffect, useState } from "react";
import axios from 'axios';

export default function StudentCard({props}) {

    const [studentInfo, setInfo] = useState([]);

    useEffect(() => {
        axios.get("https://moj-api.herokuapp.com/credits")
        .then(res => {
            console.log(res);
            setInfo(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])

    return (
        <div className="studentCard">
            <img src="https://www.fakepersongenerator.com/Face/female/female102160866071.jpg" alt="John"/>
                <h1>Firstname Lastname</h1>
                <p>Harvard University</p>
                <p></p>
        </div>

    );
}