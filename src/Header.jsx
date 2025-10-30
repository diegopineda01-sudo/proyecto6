import './header.css'

function Header() {
    return (
        <header className="cabecera">
            <div class="contenedorLogo">
                <a href="#" class="logo">
                    DM
                </a>
                <div class="textoLogo">
                    <p>Diego Maldonado</p>
                </div>
            </div>
            <div class="menu">
                <a href="index.html">Inicio</a>
                <a href="proyectos.html">Proyectos</a>
            </div>
            <div class="hambu">
                <img src="./img/icons8-menu-250.png" alt=""/>
            </div>
        </header>
    );
}

export default Header;