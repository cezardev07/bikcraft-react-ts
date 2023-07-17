import { Link } from "react-router-dom";
import "./style.css"

export const Header = () => {
    return(
        <header>
            <nav>
                <Link to="/">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt=""/>
                </Link>
                <ul>
                    <Link to="/bikes">bicicletas</Link>
                    <Link to="/seguros">Seguros</Link>
                    <Link to="/contact">Contato</Link>
                </ul>
            </nav>
        </header>
    )
}