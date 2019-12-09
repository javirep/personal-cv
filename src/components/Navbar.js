import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <div className="navBar-div">
            {
                props.aboutMe ?
                    <Link to="/"> <b> About Me & Skills </b></Link>
                    :
                    <Link to="/"> About Me & Skills </Link>
            }
            {
                props.projects ?
                    <Link to="/projects"> <b> Projects </b></Link>
                    :
                    <Link to="/projects">Projects</Link>
            }
            {
                props.experience ?
                    <Link to="/experience"> <b> Experience </b></Link>
                    :
                    <Link to="/experience">Experience</Link>
            }
            {
                props.studies ?
                    <Link to="/studies"> <b> Studies </b></Link>
                    :
                    <Link to="/studies"> Studies </Link>
            }
        </div>
    )
}
