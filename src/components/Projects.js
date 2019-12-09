import React from 'react'
import Navbar from "./Navbar.js"

export default function Projects() {
    return (
        <div>
            <Navbar projects={true} />
            <div className="project-container">

                <h1>Project #1 Carpool</h1>
                <a href="http://carpoolbcn.firebaseapp.com" target="_blank" className="project-box">
                    <div className="carpool project-image"></div>
                    <div className="project-info">
                        <p>React app in which users can find other people to carpool with to work.</p>
                        <p className="small">React.js, CSS, Express, Node.js, Mongo</p>
                    </div>
                </a>

                <h1>Project #2 Iron-y</h1>
                <a href="http://iron-y.herokuapp.com" target="_blank" className="project-box">
                    <div className="iron-y project-image"></div>
                    <div className="project-info">
                        <p>App for bootcamps students that gamifies their experience.</p>
                        <p className="small">HBS, CSS, Express, Node.js, Mongo</p>
                    </div>
                </a>

                <h1>Project #3 Be hoppy</h1>
                <a href="https://javirep.github.io/BE-HOPPY/" target="_blank" className="project-box">
                    <div className="be-hoppy project-image"></div>
                    <div className="project-info">
                        <p>Static web of a brewery. In it users can find the basic information.</p>
                        <p className="small">HTML, CSS, JavaScript</p>
                    </div>
                </a>

            </div>
        </div>
    )
}
