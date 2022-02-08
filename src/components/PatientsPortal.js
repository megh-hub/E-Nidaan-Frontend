import React from 'react'
import Navbar from "../components/Header"

const PatientsPortal = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h1>Patient's Portal</h1>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="First Name:" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Email:" />
                            </div>
                            <div class="mb-3">
                                <input type="Phone No.:" class="form-control" placeholder="Phone No.:" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Last Name:" />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder="Password: " />
                            </div>
                            <div class="mb-3">
                                <input type="file" class="form-control" placeholder="Medical History: Upload File :" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <p>Do you want to upload your reports right now?</p>
                        <button>Yes</button>
                        <button>NO</button>
                    </div>
                    <div>
                        <form>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Do you agree to the terms and conditions?</label>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientsPortal
