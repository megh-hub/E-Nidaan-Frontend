import React from 'react'
import doc2 from "../images/Placeholder.svg"
const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card2">
                            <h1>Contact</h1>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Name:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Phone No:</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                <label >Message: </label>
                                <br></br>
                                <textarea rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>

                        </div>
                        <img id="doc2" src={doc2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
