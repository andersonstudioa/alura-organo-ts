import "./CampoTexto.css"
//Sintaxe Arrow Function.
const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder+props.label.toLowerCase()}...` //concatenação

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto