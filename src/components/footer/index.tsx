import "./style.css";

export const Footer = () => {
    return(
        <footer>
            <div className="content-wrapper">
                <div className="context-wrapper">
                    <div className="logo">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"/>
                    </div>
                    <div className="contato">
                        <h2>contato</h2>
                        <ul>
                            <li>
                                <a href="#">+55 21 9999-9999</a>
                                <a href="#">contato@bikcraft.com</a>
                            </li>
                            <li className="endereco">
                                <p>Rua Ali Perto, 42 - Botafogo</p>
                                <p>Rio de Janeiro - RJ</p>
                            </li>
                            <li className="redes-sociais">
                                <a href="#">
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="about"> 
                        <h2>Informações</h2>
                        <ul>
                            <a href="#">Bicicletas</a>
                            <a href="#">Seguros</a>
                            <a href="#">Contato</a>
                            <a href="#">Termos e Condições</a>
                        </ul>
                    </div>
                </div>
                <div className="direitos-reservados">
                    <p>Bikcraft © Alguns direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}