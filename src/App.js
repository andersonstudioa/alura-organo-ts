import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Programaçãos',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const redes = [
    {
      nome: 'Facebook',
      endereco: 'http://facebook.com/alura',
      imagem: '../imagens/fb.png'
    },
    {
      nome: 'Instagram',
      endereco: 'http://instagram.com/alura',
      imagem: '../imagens/ig.png'
    },
    {
      nome: 'Twitter',
      endereco: 'http://twitter.com/alura',
      imagem: '../imagens/tw.png'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {

    //A instrução 'debugger' permite ao Chrome (v8+) parar o fluxo do App.js e debuggar linha a linha.
    //É possível até digitar o nome da variável no console para veriricar seu valor.
    debugger

    //Esta sintaxe é similar a de criar uma variável temporária para receber o novo colaborador e acrescentar aos anteriores
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => <Time
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        //Filtrar apenas os colaboradores do time escolhido na lista suspensa
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape infos={redes}/>
    </div>
  );
}

export default App;
