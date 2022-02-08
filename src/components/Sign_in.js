import React from 'react'
import Navbar from "../components/Header"
import girl from "../images/doctor.svg"
import lbox from "../images/Group6.svg"
import tbox from "../images/Group18.svg"
import bbox from "../images/Group19.svg"
const Sign_in = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <h1>Sign In</h1>
                        <form>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Email:" />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder="Password:" />
                            </div>
                            <button> Sign In</button>
                            <p>Don't have an account? Register</p>
                        </form>
                    </div>
                    <div className="col-lg-3 ">
                        <img id="bbox" src={bbox} />
                        <img id="lbox" src={lbox} />
                    </div>
                    <div className="col-lg-4 ">
                        <img id="tbox" src={tbox} />
                        <img id="doc" src={girl} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign_in
