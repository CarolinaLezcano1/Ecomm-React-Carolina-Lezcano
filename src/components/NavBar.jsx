import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg minav">
                <div className="container-fluid">
                    <p>Birra</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item categoria">
                                <Link to="/Ecomm-React-Carolina-Lezcano/categoria/1">Negra</Link>
                            </li>
                            <li className="nav-item categoria">
                               <Link to="/Ecomm-React-Carolina-Lezcano/categoria/2">Roja</Link>
                            </li>
                            <li className="nav-item categoria">
                               <Link to="/Ecomm-React-Carolina-Lezcano/categoria/3">Rubia</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;