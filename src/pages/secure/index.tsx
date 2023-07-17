import "./style.css";

export const SecurePlano = () => {
    return(
        <>
            <section className="nivel-seguro">
                <div className="context-wrapper">
                    <div className="context">
                        <p>Escolha o seguro</p>
                        <h1>você seguro<span>.</span></h1>
                    </div>
                </div>
                <div className="nivel-wrapper">
                    <div className="card">
                        <div className="header-card">
                            <h2>PRATA</h2>
                            <div className="price">
                                <p>R$ 199</p>
                                <span>mensal</span>
                            </div>
                        </div>
                        <ul>
                            <li>Duas trocas por ano</li>
                            <li>Assistência técnica</li>
                            <li>Suporte 08h às 18h</li>
                            <li>Cobertura estadual</li>
                        </ul>
                        <div className="inscreva">
                            <a href="#">inscreva-se</a>
                        </div>
                    </div>

                    
                    <div className="card">
                        <div className="header-card">
                            <h2 className="gold">OURO</h2>
                            <div className="price">
                                <p>R$ 299</p>
                                <span>mensal</span>
                            </div>
                        </div>
                        <ul>
                            <li>Cinco trocas por ano</li>
                            <li>Assistência especial</li>
                            <li>Suporte 24h</li>
                            <li>Cobertura nacional</li>
                            <li>Desconto em parceiros</li>
                            <li>Acesso ao Clube Bikcraft</li>
                        </ul>
                        <div className="inscreva">
                            <a className="gold" href="#">inscreva-se</a>
                        </div>
                    </div>

                </div>
            </section>
            <section className="vantagens">
                <div className="vantagens-wrapper">
                    <div className="title">
                        <h2>vantagens<span>.</span></h2>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt=""/>
                            </div>
                            <h3>Reparo Elétrico</h3>
                            <p>Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.</p>
                        </div>
                        <div className="card">
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/carbono.svg" alt=""/>
                            </div>
                            <h3>Carbono</h3>
                            <p>Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.</p>
                        </div>
                        <div className="card">
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/sustentavel.svg" alt=""/>
                            </div>
                            <h3>Sustentável</h3>
                            <p>Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.</p>
                        </div>
                        <div className="card">
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/rastreador.svg" alt=""/>
                            </div>
                            <h3>Rastreador</h3>
                            <p>Utilizamos o GPS da sua Bikcraft em conjunto com especialistas em segurança para efetuarmos a recuperação.</p>
                        </div>
                        <div className="card">
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/seguro.svg" alt=""/>
                            </div>
                            <h3>Segurança</h3>
                            <p>Com o seguro Bikcraft você pode ficar tranquilo em saber que o seu dinheiro não será perdido em casos de roubo.</p>
                        </div>
                        <div className="card">
                            <div className="icone">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/icones/velocidade.svg" alt=""/>
                            </div>
                            <h3>Rapidez</h3>
                            <p>A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}