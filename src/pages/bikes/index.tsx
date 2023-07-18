import { Link } from "react-router-dom";
import "./style.css";

export const Bikes = () => {
    return(
        <>
            <section className="context-wrapper">
                <div className="context">
                    <p>Escolha a melhor para você</p>
                    <h1>nossas bicicletas<span>.</span></h1>
                </div>
            </section>
            <section className="bike-wrapper">
                <div className="content-bike">
                    <div className="bike">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus.jpg" alt=""/>
                        <span>R$ 4999</span>
                    </div>
                    <div className="context-wrapper">
                        <div className="description">
                            <h2>Nimbus Stark</h2>
                            <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                        </div>
                        <div className="context">
                            <ul>
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt=""/>
                                    Motor Elétrico 
                                </li>
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/carbono.svg" alt=""/>
                                    Fibra de Carbono
                                </li>
                                
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/velocidade.svg" alt=""/>
                                    50 km/h 
                                </li>
                                
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/rastreador.svg" alt=""/>
                                    Rastreador 
                                </li>
                            </ul>
                            <Link to="/bikcraft-react-ts/bikes/bike/NimbusStark">MAIS SOBRE</Link>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="bike-wrapper active">
                <div className="content-bike">
                    <div className="bike">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic.jpg" alt=""/>
                        <span>R$ 2499</span>
                    </div>
                    <div className="context-wrapper">
                        <div className="description">
                            <h2>Magic Might</h2>
                            <p>A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                        </div>
                        <div className="context">
                            <ul>
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt=""/>
                                    Motor Elétrico 
                                </li>
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/carbono.svg" alt=""/>
                                    Fibra de Carbono
                                </li>
                                
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/velocidade.svg" alt=""/>
                                    45 km/h 
                                </li>
                                
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/rastreador.svg" alt=""/>
                                    Rastreador 
                                </li>
                            </ul>
                            <Link to="/bikcraft-react-ts/bikes/bike/MagicMight">MAIS SOBRE</Link>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="bike-wrapper">
                <div className="content-bike">
                    <div className="bike">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula.jpg" alt=""/>
                        <span>R$ 3999</span>
                    </div>
                    <div className="context-wrapper">
                        <div className="description">
                            <h2>Nebula Cosmic</h2>
                            <p>A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                        </div>
                        <div className="context">
                            <ul>
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt=""/>
                                    Motor Elétrico 
                                </li>
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/carbono.svg" alt=""/>
                                    Fibra de Carbono
                                </li>
                                
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/velocidade.svg" alt=""/>
                                    50 km/h 
                                </li>
                                
                                <li>
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/rastreador.svg" alt=""/>
                                    Rastreador 
                                </li>
                            </ul>
                            <Link to="/bikcraft-react-ts/bikes/bike/NebulaCosmic">MAIS SOBRE</Link>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}