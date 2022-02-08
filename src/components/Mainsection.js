import girl from "../images/doctor.svg"
import lbox from "../images/Group6.svg"
import tbox from "../images/Group18.svg"
import bbox from "../images/Group19.svg"
const Mainsection = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-lg-5 col-md-12">
                    <p className="firsttext">Get Your Diagnosis</p>
                    <p className="Secondtext">Within Seconds</p>
                    <form>
                        <input type="text" value="I am a doctor" />
                    </form>
                    <button className="mainbtn">SIGN IN</button>
                    <button className="mainbtn">REGISTER</button>
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
            {/* <p className="firsttext">Get Your Diagnosis</p>
            <p className="Secondtext">Within Seconds</p>
            <form>
                <input type="text" value="doctor" />
            </form>
            <button>SIGN IN</button>
            <button>REGISTER</button>
            <div className="right">
                <img id="lbox" src={lbox} />
                <img id="doc" src={girl} />
            </div> */}
        </div>
    )
}

export default Mainsection

