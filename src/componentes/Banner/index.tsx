import "./Banner.css"
import React from "react"

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string //O "?" indica que é opcional
}

const Banner = ({enderecoImagem, textoAlternativo}:BannerProps) => {

    //JSX: JavaScript XML
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
        
    )
}

export default Banner