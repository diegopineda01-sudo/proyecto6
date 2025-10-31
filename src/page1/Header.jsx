import './header.css'
import foto1 from '/img/icons8-menu-250.png'
import { Link } from 'react-router-dom'



function Header() {
    return (
        <header className="cabecera">
            <div className="contenedorLogo">
                <a href="#" class="logo">
                    DM
                </a>
                <div className="textoLogo">
                    <p>Diego Maldonado</p>
                </div>
            </div>
            <div className="menu">
                <Link to="/proyecto6">Inicio</Link>
                <Link to="/proyecto6/pagina2">Proyectos</Link>
            </div>

            <div className="hambu">
                <img src={foto1} alt="" />
            </div>
        </header>
    );
}

export default Header;