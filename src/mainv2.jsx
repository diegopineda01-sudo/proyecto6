import './mainv2.css'

function Mainv2() {
  return (
    <main className="hero">
      <div className="imagen">
        <img src="./img/mircea-solomiea-bbDIL8i2GFo-unsplash.jpg" alt="Imagen de fondo" />
      </div>

      <div className="contenido">
        <b>Hola, soy Juan Pérez — Desarrollador FrontEnd</b>
        <p>
          Apasionado por crear experiencias digitales excepcionales. Especializado en React,
          TypeScript y diseño de interfaces modernas. Transformo ideas en productos digitales
          que impactan.
        </p>

        <div className="imagenes">
          <img src="./img/github.png" alt="GitHub" />
          <img src="./img/in.png" alt="LinkedIn" />
        </div>

        <button className="boton1">Ver mis Proyectos</button>
      </div>
    </main>
  )
}

export default Mainv2
