import { Link } from "react-router-dom";

import { FaHome, FaTshirt, FaShoppingCart, FaUser, FaMapMarkerAlt, FaBox, FaDumbbell } from "react-icons/fa"; 
import './styles/nav.css';

const Nav = () => (
    <nav className="nav-container">
       
        <Link to="/" className="nav-logo">MaxDep</Link> 

        <div className="nav-links-wrapper">
            
            <Link to="/" className="nav-link"><FaHome /><span>Inicio</span></Link>
            <Link to="/accesorio" className="nav-link"><FaDumbbell /><span>Accesorios</span></Link>
            <Link to="/ubicacion" className="nav-link"><FaMapMarkerAlt /><span>Ubicación</span></Link>
            <Link to="/pedido" className="nav-link"><FaBox /><span>Pedido</span></Link>
        </div>

        <div className="nav-utility-links">
            <Link to="/carrito" className="nav-link primary-icon"><FaShoppingCart /></Link>
           
            <Link to='/registro' className="nav-link primary-icon"><FaUser /><span>Registro/Acceso</span></Link> 
        </div>
    </nav>
);

export default Nav;