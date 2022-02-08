import React from 'react'
import rect from "../images/Rectangle11.svg"
const About = () => {
    return (
        <div>
            <div className="Container">
                <div className="row">
                    <div className = "col-lg-7 col-md-7">
                        <h2>About Us</h2>
                        <p>We are a team of 4 students from VIT Vellore aiming to find a solution to make diagnosis cheaper and faster.</p>
                        <div class="card1">
                            <p>Megha Maitin</p>
                            <p>2nd Year BTech,VIT</p>
                        </div>
                    </div>
                    <div className ="col-lg-5 col-md-5">
                        <img id="rect" src={rect} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
