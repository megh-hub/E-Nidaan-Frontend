import React from 'react'
import rect from "../images/Rectangle11.svg"
import arrow from "../images/ExpandArrow.svg"
const About = () => {
    return (
        <div>
            <about>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <p className="about">About Us</p>
                            <p className="acon">We are a team of 4 students from VIT Vellore aiming to find a solution to make diagnosis cheaper and faster.</p>
                            <div class="card1">
                                <div>
                                    <p>Megha Maitin</p>
                                    <p className="fixed">2nd Year BTech,VIT</p>
                                </div>
                                <img id="arrow" src={arrow} />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <img id="rect" src={rect} />
                        </div>
                    </div>
                    <div className="emptyspace">
                        
                    </div>
                </div>
        </about>
    </div>
    )
}

export default About
