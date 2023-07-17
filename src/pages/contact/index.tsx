import "./style.css";

export const Contact = () => {
    return(
        <>
            <section className="nosso-contato">
                <div className="context-wrapper">
                    <div className="context">
                        <p>Respostas em até 24h</p>
                        <h1>nosso contato<span>.</span></h1>
                    </div>
                </div>
                <div className="contato-wrapper">
                    <div className="loja-online">
                        <div className="title">
                            <h2>Loja Online</h2>
                        </div>
                        <div className="endereco">
                            <p>Rua Ali Perto, 35</p>
                            <p>Rio de Janeiro - RJ</p>
                            <p>Brasil - Terra - Vita Láctea</p>
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/local.svg" alt=""/>
                            </div>
                        </div>
                        <div className="contato">
                            <a href="#">contato@bikcraft.com</a>
                            <a href="#">assistencia@bikcraft.com</a>
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/horario.svg" alt=""/>
                            </div>
                        </div>
                        <div className="telefone">
                            <a href="#">+55 21 9999-9999</a>
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/local.svg" alt=""/>
                            </div>
                        </div>
                        <div className="redes-sociais">
                            <a href="#">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram-p.svg"/>
                            </a>
                            <a href="#">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook-p.svg" alt=""/>
                            </a>
                            <a href="#">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube-p.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <form>
                        <div className="nome-telefone-wrapper">
                            <div className="nome">
                                <label htmlFor="nome">Nome</label>
                                <input required id="nome" type="text" placeholder="Seu nome"/>
                            </div>
                            <div className="telefone">
                                <label htmlFor="telefone">Telefone</label>
                                <input required id="telefone" type="text" placeholder="(21) 9999-9999"/>
                            </div>
                        </div>
                        
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input required id="email" type="text" placeholder="contato@email.com"/>
                        </div>
                        
                        <div className="mensagem">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea required id="mensagem" placeholder="O que você precisa?"></textarea>
                        </div>

                        <div className="btn-submit">
                            <button type="submit">ENVIAR MENSAGEM</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="nossas-lojas">
                <div className="content-wrapper">
                    <div className="title">
                        <h2>lojas locais<span>.</span></h2>
                    </div>
                    <div className="content">

                        <div className="card">
                            <div className="mapa">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/lojas/rj.jpg"/>
                            </div>
                            <div className="context">
                                <h2>Rio de Janeiro</h2>
                                <div className="info">
                                    <div className="local">
                                        <p>Rua Ali Perto, 25</p>
                                        <p>Rio de Janeiro - RJ</p>
                                    </div>
                                    <div className="contato">
                                        <a href="#">rj@bikcraft.com</a>
                                        <a href="#">+55 21 9999-9999</a>
                                    </div>
                                </div>
                                <div className="horario">
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/horario.svg"/>
                                    <p>08-18h de seg à dom</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="card">
                            <div className="mapa">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/lojas/sp.jpg"/>
                            </div>
                            <div className="context">
                                <h2>São Paulo</h2>
                                <div className="info">
                                    <div className="local">
                                        <p>Rua Ali Perto, 25</p>
                                        <p>São Paulo - SP</p>
                                    </div>
                                    <div className="contato">
                                        <a href="#">sp@bikcraft.com</a>
                                        <a href="#">+55 11 9999-9999</a>
                                    </div>
                                </div>
                                <div className="horario">
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/horario.svg"/>
                                    <p>08-18h de seg à dom</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}