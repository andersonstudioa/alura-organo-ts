import Colaborador from '../Colaborador'
import "./Time.css"

const Time = (props) => {

    //Recebendo as propriedades do objeto times do App.js
    const cssSection = { backgroundColor: props.corSecundaria }
    const cssH3 = {borderColor: props.corPrimaria}

    return (
        //Renderização condicional similar a um if
        //Retorna somente o array colaboradores que possuir valor
        (props.colaboradores.length > 0) &&
        <section className="time" style={cssSection}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                <Colaborador 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    corPrimaria={props.corPrimaria}
                />)}
            </div>
            
        </section>
    )
}

export default Time