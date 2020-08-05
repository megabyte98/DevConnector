import React from 'react'
import { Link } from "react-router-dom"

const DashboardActions = () => {
    return (
        <div style={dash_action_style} className="dash-buttons">
            <Link style={nav_style} to="/edit-profile" className="btn btn-light">
                <i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
            <Link style={nav_style} to="/add-experience" className="btn btn-light">
                <i className="fab fa-black-tie text-primary"></i> Add Experience</Link>
            <Link style={nav_style} to="/add-education" className="btn btn-light">
                <i className="fas fa-graduation-cap text-primary"></i> Add Education</Link>
        </div>
    )
}

const dash_action_style = {
    fontFamily:'Merriweather',
    fontSize:'22px',
}
const nav_style = {
    boxShadow:'2px 2px 2px 2px black',
    padding:'8px',
    marginRight:'1rem'
}

export default DashboardActions