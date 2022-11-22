import { ReactElement } from "react"
import "./Botao.css"
import React from "react"

//O que o componente espera e qual tipo
interface BotaoProps {
    children: ReactElement | string
}

//Para que o className funcione em TypeScript é necessário infomrar no tsconfig.json
//Descomentar linha 16 do tsconfig.: "jsx": "react"
const Botao = (props: BotaoProps) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao