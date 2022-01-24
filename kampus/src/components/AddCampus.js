import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import './styles/AddCampus.css'

export default function AddCampus() {

    const [campus, setCampus] = useState({
        id: "",
        name: "",
        address: "",
        city: "",
        zip: "",
        description: "",
        img: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
    }

    const updateId = (e) => {
        setCampus({...campus, id: e.target.value})
    }
    const updateName = (e) => {
        setCampus({...campus, name: e.target.value})
    }

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

            <div className="inputCampus">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>ID</label> 
                        <input type="text" name="amount" value={campus.id} onChange={updateId} />                               
                    </div>
                    <div className="name">
                        <label >Name</label> 
                        <input type="text" name="description" value={campus.name} onChange={updateName}/>                      
                    </div>
                    <div className="address">
                        <label>Address</label> 
                        <input type="text" name="amount" value={campus.id} onChange={updateId} />                               
                    </div>
                    <div className="city">
                        <label>City</label> 
                        <input type="text" name="amount" value={campus.id} onChange={updateId} />                               
                    </div>
                    <div className="zip">
                        <label>Zip</label> 
                        <input type="text" name="amount" value={campus.id} onChange={updateId} />                               
                    </div>
                    <div className="description">
                        <label>Description</label> 
                        <input type="text" name="amount" value={campus.id} onChange={updateId} />                               
                    </div>
                    <div className="img">
                        <label>Image url</label> 
                        <input type="text" name="amount" value={campus.id} onChange={updateId} />                               
                    </div>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )
}

