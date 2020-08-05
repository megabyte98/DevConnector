import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const ProfileItem = ({ profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    bio,
    skills
} }) => {
    return (
        <div style={card_style} className="profile">
            <img src={avatar} alt="" className="round-img" />
            <div>
                <h2>{name}</h2>
                <p>{status} {company && <span>at {company}</span>}</p>
                <p className="my-1">{location && <span>{location}</span>}</p>
                <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
            </div>
            <ul style={{listStyle:'circle'}} >
                {skills.slice(0, 4).map((skill, index) => (
                    <li  key={index} >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

const card_style = {
    marginRight:'3rem',
    marginBottom:'4rem',
    border:'1px solid black',
    boxShadow:'2px 3px 3px 3px black',
    background:'#151B54',
    padding:'1rem 1rem',
    color:'white',
}

export default ProfileItem
