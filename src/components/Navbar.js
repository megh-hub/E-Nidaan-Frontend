import React from 'react'
import logo from "../images/stethoscope.svg";
import user from "../images/User.svg";
import doorbell from "../images/Doorbell.svg";
import settings from "../images/Settings.svg";
const Navbar = () => {
    return (
            <navbar className='header'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img id="logo" src={logo} alt=""  className="d-inline-block align-text-top" />
                        E-Nidaan
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="one nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                <img id="user" src={user} alt=""/>
                                </a>
                            </li>
                            <li className="two nav-item">
                                <a className="nav-link" href="#">
                                <img id="doorbell" src={doorbell} alt=""/>
                                </a>
                            </li>
                            <li className="three nav-item">
                                <a className="nav-link" href="#">
                                <img id="settings" src={settings} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </navbar>
    )
}

export default Navbar
