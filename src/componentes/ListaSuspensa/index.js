//O método map percorre arrays em JS e retorna uma nova lista transformada (mapeadas por uma transformação)
//Diferentemente do foreach, que apenas itera sobre uma lista
import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa