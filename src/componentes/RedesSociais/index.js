import "./RedesSociais.css"

const RedesSociais = (props) => {
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