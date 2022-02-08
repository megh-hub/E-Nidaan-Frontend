import logo from "../images/stethoscope.svg";
import rect1 from "../images/Rectangle8.svg";
const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img id="logo" src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        E-Nidaan
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li>
                                <img id="rect1" src={rect1} />
                                <div className="btncomp">
                                    <button className="navbtn">Sign In</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header
