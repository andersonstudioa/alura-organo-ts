import RedesSociais from "../RedesSociais"
import "./Rodape.css"

const Rodape = (props) => {
    return (
        <footer className="rodape">
            <RedesSociais
                itens={props.infos}
            />
            <div className="logo">
                <img src="/imagens/logo.png" alt="Organo"/>
            </div>
            <div className="copyright">
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape