import { 
    BiCart } from "react-icons/bi";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg minav">
            <div className="container-fluid">
                <a className="navbar-brand titulonav" href=""><img src="descarga.png" alt=""></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link letrasnav" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link letrasnav" href="#">Productos</a>
                        <a className="nav-link letrasnav" href="#">Contacto</a>
                        <div className="react-icons"><BiCart /></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;