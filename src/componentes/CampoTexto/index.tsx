import "./CampoTexto.css"

interface CampoTextoProps {
    //aoAlterado é uma função void (que não retorna nada) e recebe um valor do tipo string
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    required?: boolean
}

//Sintaxe Arrow Function.
const CampoTexto = ({aoAlterado, placeholder, label, valor, required = false}: CampoTextoProps) => {
    const placeholderModificada = `${placeholder+label.toLowerCase()}...` //concatenação

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={required}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto