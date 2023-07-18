import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

interface TypeBike {
    bmx: string;
    img: string;
    desc?: string;
    price: string;
    name: string;
}

export const Bike = () => {
    const [bike, setBike] = useState<TypeBike[]>([])
    const [imgBikeSelect, setImgBikeSelect] = useState<string>("")

    const [bikes, _setBikes] = useState<TypeBike[]>([
        {
            bmx: "NimbusStark",
            img: "https://www.origamid.com/projetos/bikcraft/img/bicicleta/nimbus1.jpg",
            desc: "A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
            price: "R$ 4999",
            name: "Nimbus Stark"
        },
        {
            bmx: "NebulaCosmic",
            img: "https://www.origamid.com/projetos/bikcraft/img/bicicleta/nimbus3.jpg",
            desc: "A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
            price: "R$ 3999",
            name: "Nebula Cosmic"
        },
        {
            bmx: "MagicMight",
            img: "https://www.origamid.com/projetos/bikcraft/img/bicicleta/nimbus2.jpg",
            desc: "A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
            price: "R$ 2499",
            name: "Magic Might"
        },
    ])
    
    const { product } = useParams()

    useEffect(() => {
        const bikeSelect = bikes.filter(item => {
            if(item.bmx === product) return item
        })
        setBike(bikeSelect)
        if(bikeSelect.length > 0){
            setImgBikeSelect(bikeSelect[0].img)
        }
    }, [])
    
    
    const mouseHover = ({ target } : any) => {
        setImgBikeSelect(target.src)
    }
    return(
        <>
            {
            bike.length > 0 
            ?bike.map((item : TypeBike, id : number) => {
                return(
                    <div key={id}>
                        <section className="context-wrapper">
                            <div className="context">
                                <p>{item.price}</p>
                                <h1>{item.name}<span>.</span></h1>
                            </div>
                        </section>
                        <section className="grid-bike-for-sale">
                            <div className="context">
                                <div className="col-1">
                                    <div className="img-bike">
                                        <img src={imgBikeSelect}/>
                                    </div>
                                    <div className="option-bikes">
                                        <a href="#">
                                            <img onMouseEnter={mouseHover} src="https://www.origamid.com/projetos/bikcraft/img/bicicleta/nimbus2.jpg" alt="" />
                                        </a>
                                        <a href="#">
                                            <img onMouseEnter={mouseHover} src="https://www.origamid.com/projetos/bikcraft/img/bicicleta/nimbus3.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="context-wrapper">
                                        <div className="text">
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="shell-product">
                                            <div className="btn-wrapper">
                                                <button>COMPRAR AGORA</button>
                                            </div>
                                            <ul>
                                                <p>
                                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/entrega.svg"/>
                                                    entrega em 5 dias
                                                </p>
                                                <p>
                                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/estoque.svg"/>
                                                    8 em estoque
                                                </p>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="information">
                                        <div className="title">
                                            <p>informações</p>
                                        </div>
                                        <div className="grid-card">
                                            <div className="card">
                                                <div className="img">
                                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt="" />
                                                </div>
                                                <div className="title-card">
                                                    <h2>Motor Elétrico</h2>
                                                </div>
                                                <div className="description-card">
                                                    <p>
                                                        Permite você viajar distâncias inimaginaveis com a sua bike.
                                                    </p>
                                                </div>
                                            </div>                                            
                                            <div className="card">
                                                <div className="img">
                                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt="" />
                                                </div>
                                                <div className="title-card">
                                                    <h2>Motor Elétrico</h2>
                                                </div>
                                                <div className="description-card">
                                                    <p>
                                                        Permite você viajar distâncias inimaginaveis com a sua bike.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img">
                                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt="" />
                                                </div>
                                                <div className="title-card">
                                                    <h2>Motor Elétrico</h2>
                                                </div>
                                                <div className="description-card">
                                                    <p>
                                                        Permite você viajar distâncias inimaginaveis com a sua bike.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img">
                                                    <img src="https://www.origamid.com/projetos/bikcraft/img/icones/eletrica.svg" alt="" />
                                                </div>
                                                <div className="title-card">
                                                    <h2>Motor Elétrico</h2>
                                                </div>
                                                <div className="description-card">
                                                    <p>
                                                        Permite você viajar distâncias inimaginaveis com a sua bike.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            })
            : (
                <>
                    <section className="default-404">
                        <h2>OPS - 404</h2>
                        <p>produto não encontrado</p>
                        <Link to="/">voltar para a pagina inicial</Link>
                    </section>
                </>
            )
            }
        </>
    )
}