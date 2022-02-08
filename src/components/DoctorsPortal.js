import React from 'react'
import Navbar from "../components/Header"
const DoctorsPortal = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h1>Doctor's Portal</h1>
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
                                <input type="Registration No.:" class="form-control" placeholder="Registeration No.:" />
                            </div>
                            <div class="mb-3">
                                <input type="Adhar Card No.:" class="form-control" placeholder="Aadhar Card No.:" />
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
                                <input type="hospital" class="form-control" placeholder="Hospital" />
                            </div>
                            <div class="mb-3">
                                <input type="file" class="form-control" placeholder="Upload File :" />
                            </div>
                        </form>
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

export default DoctorsPortal
