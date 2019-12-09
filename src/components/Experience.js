import React from 'react'
import Navbar from "./Navbar"

export default function Experience() {
    return (
        <div>
            <Navbar experience={true} />
            <div className="card">
                <h2>Lead Teacher</h2>
                <span className="small"> BarcelonaFormación, Barcelona / Sept 2019 - Nov 2019</span>
                <ul>
                    <li><p>In charge of the lectures for the courses of: Biomedical Laboratory Tecnician and Pathologic Anathomy</p></li>
                    <li><p>Responsible for the organization of the Laboratory Practices</p></li>
                </ul>
            </div>
            <div className="card">
                <h2>Junior Researcher</h2>
                <span className="small"> ICMAB, Barcelona / Sept 2016 - Jul 2018 </span>
                <ul>
                    <li><p>Responsible for the synthesis of Nanomaterials for drug encapsulation </p></li>
                    <li><p>In charge of the physicochemical characterizations of the nanoparticle </p></li>
                    <li><p>Maintenance and treatment of cell cultures</p></li>
                </ul>
            </div>
        </div>
    )
}
