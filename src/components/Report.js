import React from 'react'

const Report = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>Report</h1>
                    <div className="col-lg-6 col-md-6">
                        <form>
                            <label>Upload Scan:</label>
                            <input placeholder="Upload File" />
                            <div className="felement">
                                <label>Smoking:</label>
                                <button className="butt">No</button>
                                <button className="butt">Yes</button>
                            </div>
                            <div className="felement">
                                <label>Anxiety:</label>
                                <button className="butt">No</button>
                                <button className="butt">Yes</button>
                            </div>
                            <div className="felement">
                                <label>Yellow Fingers:</label>
                                <button className="butt">No</button>
                                <button className="butt">Yes</button>
                            </div>
                            <div className="felement">
                                <label>Wheezing:</label>
                                <button className="butt">No</button>
                                <button className="butt">Yes</button>
                            </div>
                            <div className="felement">
                                <label>Coughing:</label>
                                <button className="butt">No</button>
                                <button className="butt">Yes</button>
                            </div>
                            <div className="felement">
                                <label>Chest Pain:</label>
                                <button className="butt">No</button>
                                <button className="butt">Yes</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>Gender:</label>
                        <input />
                        <div className="felement">
                            <label>Peer Pressure:</label>
                            <button className="butt">No</button>
                            <button className="butt">Yes</button>
                        </div>
                        <div className="felement">
                            <label>Chronic Disease:</label>
                            <button className="butt">No</button>
                            <button className="butt">Yes</button>
                        </div>
                        <div className="felement">
                            <label>Fatigue:</label>
                            <button className="butt">No</button>
                            <button className="butt">Yes</button>
                        </div>
                        <div className="felement">
                            <label>Allergy:</label>
                            <button className="butt">No</button>
                            <button className="butt">Yes</button>
                        </div>
                        <div className="felement">
                            <label>Alocohol Consumption:</label>
                            <button className="butt">No</button>
                            <button className="butt">Yes</button>
                        </div>
                        <div className="felement">
                            <label>Shortness of breath:</label>
                            <button className="butt">No</button>
                            <button className="butt">Yes</button>
                        </div>
                    </div>
                    <div className="felement">
                        <label>Swalloing Difficulty:</label>
                        <button className="butt">No</button>
                        <button className="butt">Yes</button>
                    </div>
                    <div>
                        <button>Get Diagnosis</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report
