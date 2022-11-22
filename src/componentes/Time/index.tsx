import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import Colaborador from "../Colaborador"
import "./Time.css"

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[] //o "[]" indica que é uma lista
    //A linha abaixo representa um hack que funciona
    //colaboradores: {nome: string, cargo: string, imagem: string}[]
    //Devido aos colaboradores serem entidades que podem ser usadas por toda a aplicação
    //é aconcelhavel criar interfaces compartilhadas (/src/compartilhado)
}

const Time = (props: TimeProps) => {

    //Recebendo as propriedades do objeto times do App.js
    const cssSection = { backgroundColor: props.corSecundaria }
    const cssH3 = {borderColor: props.corPrimaria}

    return (
        //Renderização condicional similar a um if
        //Retorna somente o array colaboradores que possuir valor
        (props.colaboradores.length > 0) ? <section className="time" style={cssSection}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                <Colaborador 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    data={colaborador.data} 
                    imagem={colaborador.imagem}
                    corPrimaria={props.corPrimaria}
                />)}
            </div>
        </section>
        :
        <></>
    )
}

export default Time