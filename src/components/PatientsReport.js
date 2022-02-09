import React from 'react'
import femaledoc from "../images/femaledoc.svg";

const PatientsReport = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div>
                        <img id="femaledoc" src={femaledoc} />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p>Name:Josephine Roy</p>
                        <p>About: Practioning Lawyer</p>
                        <p>Report<a>Click to See</a></p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p>Patient ID: 203444</p>
                        <p>Medical History: <a>Click to See</a></p>
                        <p>Age:35</p>
                    </div>
                    <div>
                        <h1>Diagnosis: Lung Cancer</h1>
                    </div>
                    <div>
                        <label>Comments by the Patient</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <label>Comments by You</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Diagnosis Approved</button>
                        <button>Diagnosis Not Approved</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientsReport
