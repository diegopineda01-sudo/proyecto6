import './mainv2.css'
import foto1 from '/img/mircea-solomiea-bbDIL8i2GFo-unsplash.jpg'
import foto2 from '/img/github.png'
import foto3 from '/img/in.png'


function Mainv2() {
  return (
    <main className="hero1">
      <div className="imagen">
        <img src={foto1} alt="Imagen de fondo" />
      </div>

      <div className="contenido">
        <b>Hola, soy Juan Pérez — Desarrollador FrontEnd</b>
        <p>
          Apasionado por crear experiencias digitales excepcionales. Especializado en React,
          TypeScript y diseño de interfaces modernas. Transformo ideas en productos digitales
          que impactan.
        </p>

        <div className="imagenes">
          <img src={foto2} alt="GitHub" />
          <img src={foto3} alt="LinkedIn" />
        </div>

        <button className="boton1">Ver mis Proyectos</button>
      </div>
    </main>
  )
}

export default Mainv2
