import { Link } from "react-router-dom";
import "./style.css"

export const Header = () => {
    return(
        <header>
            <nav>
                <Link to="/bikcraft-react-ts/">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt=""/>
                </Link>
                <ul>
                    <Link to="/bikcraft-react-ts/bikes">bicicletas</Link>
                    <Link to="/bikcraft-react-ts/seguros">Seguros</Link>
                    <Link to="/bikcraft-react-ts/contact">Contato</Link>
                </ul>
            </nav>
        </header>
    )
}