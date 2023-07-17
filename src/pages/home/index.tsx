import { Link } from "react-router-dom";
import "./style.css"

export const Home = () => {
    return (
        <>
            <section className="home">
                <div className="context-wrapper">
                    <div className="context">
                        <h1>Bicicletas feitas sob medida<span>.</span></h1>
                        <div className="wrapper">
                            <p>Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.</p>
                            <Link to="./bikes">ESCOLHA A SUA</Link>
                        </div>
                    </div>
                    <div className="img-bg">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/fotos/introducao.jpg" alt=""/>
                    </div>
                </div>
            </section>
            <section className="escolha-bike">
                <div className="bike-wrapper">
                    <div className="title">
                        <h2>escolha a sua <span>.</span></h2>
                    </div>
                    <article>
                        <Link to="bikes" className="card">
                            <div className="img-bike">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"/>
                            </div>
                            <h3> <div className="span"></div> Magic Might</h3>
                            <p>R$ 2499</p>
                        </Link>
                        
                        <Link to="bikes" className="card">
                            <div className="img-bike">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg"/>
                            </div>
                            <h3> <div className="span"></div> Nimbus Stark </h3>
                            <p>R$ 4999</p>
                        </Link>

                        
                        <Link to="bikes" className="card">
                            <div className="img-bike">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg"/>
                            </div>
                            <h3> <div className="span"></div> Nebula Cosmic </h3>
                            <p>R$ 3999</p>
                        </Link>
                    </article>
                </div>
            </section>
        </>
    )
}