//Este é o primeiro arquivo a ser renderizado no navegador
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode auxilia a detectar erros no console do navegador duplicando a renderização
  //Remover no ambiente de produção
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

