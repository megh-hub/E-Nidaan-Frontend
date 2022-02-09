import React from 'react'
import mdoc from "../images/maledoc.svg";
const SendReport = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div>
                        <img id="mdoc" src={mdoc} />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p>Name:Dr. kailash Sharma</p>
                        <p>Specialisation: Lung Specialist</p>
                        <p>Hospital:Sampurna Hospital</p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p>Registeration No.: IND4909</p>
                        <p>Rating: </p>
                    </div>
                    <div>
                        <h1>Diagnosis:<button>Uploade Report</button></h1>
                    </div>
                    <div>
                        <label>Comments by You</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Send Diagnosis</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendReport
