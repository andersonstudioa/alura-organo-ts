import { IRedeSocial } from "../../compartilhado/interfaces/IRedeSocial"
import "./RedesSociais.css"

interface RedesSociaisProps {
    itens: IRedeSocial[]
}

const RedesSociais = (props: RedesSociaisProps) => {
    return (
        <ul className="redes">
            {props.itens.map(item => {
                return <li key={item.nome}>
                    <a href={item.endereco} target="blank">
                        <img src={item.imagem} alt={item.nome}/>
                    </a>
                </li>
            })}
        </ul>
    )
}

export default RedesSociais