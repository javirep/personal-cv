import Navbar from "./Navbar"
import React, { Component } from 'react'
import skills from "../skills/skills.json"

export default class AboutMe extends Component {

    state = {
        skills: [],
        filter: "",
        select: ""
    }

    componentDidMount = () => {
        this.setState({
            skills
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }


    render() {
        let { skills, filter, select } = this.state

        let showSkills = skills.filter(skill => skill.name.toLowerCase().includes(filter.toLowerCase()))

        showSkills = showSkills.filter(skill => skill.type.includes(select))

        showSkills.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        })

        if (showSkills.lenght = 0) {
            showSkills = { "name": "Sorry, I didn't include that as a Skill" }
        }

        return (
            <div>
                <Navbar aboutMe={true} />
                <div className="about-me-section border">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-content">For as long as I can remember, I have been interested in projects that require logical and analytical thinking. While building a career in nanoscience, I also took some coding online courses and realized  I wanted to become a programer. I enjoy the creative mind-set and team based atmosphere that coding provides, and Ironhack was the perfect place to develop my skill set.</p>
                </div>

                <div className="about-me-section">
                    <div className="about-title">
                        <h2 >Skills</h2>
                        <input className="input" type="text" name="filter" value={filter} onChange={(e) => this.handleChange(e)} placeholder="search a skill"></input>
                        <select className="input" name="select" value={this.state.value} onChange={(e) => this.handleChange(e)}>
                            <option value="">All</option>
                            <option value="technology">Technologies</option>
                            <option value="softSkill">Soft skill</option>
                        </select>
                    </div>
                    {
                        skills ?
                            (
                                showSkills.length !== 0 ?
                                    (
                                        <ul className="about-content">
                                            {

                                                showSkills.map(skill => {
                                                    return <li style={{ width: "150px" }}>{skill.name}</li>
                                                })
                                            }
                                        </ul>
                                    )
                                    : <p className="about-content">Sorry, I didn't include that as a skill :( But i am sure I can learn it quickly</p>
                            )
                            : <p>Sorry I did not include that as a skill.</p>
                    }

                </div>
            </div>
        )
    }
}

