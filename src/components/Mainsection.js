import girl from "../images/doctor.svg"
import lbox from "../images/Group6.svg"
import tbox from "../images/Group18.svg"
import bbox from "../images/Group19.svg"
const Mainsection = () => {
    return (
        <mainsection>
        <div className="container-fluid">
            <div className="row">
                <div class="col-lg-5 col-md-12">
                    <p className="firsttext">Get Your Diagnosis</p>
                    <p className="Secondtext">Within Seconds</p>
                    <form>
                        <input type="text" value="I am a doctor" />
                    </form>
                    <div className="btnsec">
                        <button className="mainbtn">SIGN IN</button>
                        <div className="space"></div>
                        <button className="mainbtn">REGISTER</button>
                    </div>
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
        </mainsection>
    )
}

export default Mainsection

