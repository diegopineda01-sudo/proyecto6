import './main.css'
import foto1 from '/img/premium_photo-1687991219808-024d29b7098d.avif'
import foto2 from '/img/premium_photo-1661658740167-45b56833412b.avif'
import foto3 from '/img/photo-1504868584819-f8e8b4b6d7e3.avif'
import foto4 from '/img/compare-fibre-Y8TiLvKnLeg-unsplash.jpg'
import foto5 from '/img/alexander-red-d3bYmnZ0ank-unsplash.jpg'

function Main() {
    return (
        <main className="hero2">
            <div className="texto2">
                <b>Mis Proyectos</b>
                <p>
                    Una Selección de proyectos que demuestran mis habilidades y experiencia en desarrollo
                    FrontEnd y diseño de interfaces.
                </p>
            </div>
            <div className="ContendorMain">
                <div className="Contenedores">
                    <img src={foto1} alt="" className="imagen1" />
                        <div className="texto">
                            <b className="titulo">
                                E-commerce Moderno
                            </b>
                            <p className="textoInterno">
                                Plataforma de commercio electrónico con
                                carrito de compras, pagos integrados y
                                panel de administracion
                            </p>
                            <div className="pildoras">
                                <p className="pildora">
                                    React
                                </p>
                                <p className="pildora">
                                    TypeScript
                                </p>
                                <p className="pildora">
                                    Stripe
                                </p>
                                <p className="pildora">
                                    Tailwind CSS
                                </p>
                            </div>
                        </div>
                </div>
                <div className="Contenedores">
                    <img src={foto2} alt="" className="imagen1" />
                        <div className="texto">
                            <b className="titulo">
                                App Móvil de Productividad
                            </b>
                            <p className="textoInterno">
                                Aplicación de gestión de tareas con
                                sincronización en tiempo real y
                                notificaciones push.
                            </p>
                            <div className="pildoras">
                                <p className="pildora">
                                    React Native
                                </p>
                                <p className="pildora">
                                    Firebase
                                </p>
                                <p className="pildora">
                                    Redux
                                </p>
                                <p className="pildora">
                                    Expo
                                </p>
                            </div>
                        </div>
                </div>
                <div className="Contenedores">
                    <img src={foto3} alt="" className="imagen1" />
                        <div className="texto">
                            <b className="titulo">
                                Dashboard Analytics
                            </b>
                            <p className="textoInterno">
                                Panel de Control con visualización
                                de Datos, gráficos interactivos y
                                reportes personalizables.
                            </p>
                            <div className="pildoras">
                                <p className="pildora">
                                    Next.js
                                </p>
                                <p className="pildora">
                                    Chart.js
                                </p>
                                <p className="pildora">
                                    PostgreSQL
                                </p>
                                <p className="pildora">
                                    Prisma
                                </p>
                            </div>
                        </div>
                </div>
                <div className="Contenedores">
                    <img src={foto4} alt="Aplicación de Fitness" className="imagen1" />
                        <div className="texto">
                            <b className="titulo">
                                App Fitness Pro
                            </b>
                            <p className="textoInterno">
                                Aplicación para seguimiento de rutinas de ejercicio,
                                planes personalizados y monitoreo de progreso.
                            </p>
                            <div className="pildoras">
                                <p className="pildora">React Native</p>
                                <p className="pildora">GraphQL</p>
                                <p className="pildora">Apollo Client</p>
                                <p className="pildora">Styled ComponentS</p>
                            </div>
                        </div>
                </div>

                <div className="Contenedores">
                    <img src={foto5} alt="Plataforma de Educación" className="imagen1" />
                        <div className="texto">
                            <b className="titulo">
                                Plataforma Educativa
                            </b>
                            <p className="textoInterno">
                                Sistema de gestión de cursos en línea con evaluaciones,
                                seguimiento y soporte para estudiantes.
                            </p>
                            <div className="pildoras">
                                <p className="pildora">Vue.js</p>
                                <p className="pildora">Firebase</p>
                                <p className="pildora">Tailwind CSS</p>
                                <p className="pildora">Node.js</p>
                            </div>
                        </div>
                </div>

            </div>
        </main>
    )
}

export default Main
