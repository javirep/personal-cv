import React from 'react'
import Navbar from './Navbar'

export default function Studies() {
    return (
        <div>
            <Navbar studies={true} />
            <div className="card">
                <h2>Web Development Bootcamp</h2>
                <span className="small">Sept 2019 - Nov 2019</span>
                <p>Ironhack, Barcelona</p>
            </div>
            <div className="card">
                <h2>Master in biomedicine</h2>
                <span className="small">Sept 2017 - Jul 2018</span>
                <p>University of Barcelona</p>
            </div>
            <div className="card">
                <h2>Bachelor in nanoscience</h2>
                <span className="small">Sept 2011 - Jul 2016 / Autonomus University of Barcelona</span>
                <p>Autonomus University of Barcelona</p>
            </div>
        </div>
    )
}
