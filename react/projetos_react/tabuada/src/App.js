import logo from './logo.svg';
import './App.css';
import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';

import Mensagem from './Mensagem';
import {Header,Header2} from './Header';
import {ShouldUpdate,BeforeUpdate,DidUpdate} from './Updating';
import Container from './Container';

// parâmetro para função em tabuada.js
// let n = prompt("Digite um número","5");

// função principal
function App() {
    return (
      <div>
        {/* <Cores />
        <Titulo titulo="Fatec"
                texto="Faculdade de Tecnologia de Presidente Prudente"
                link="https://www.fatecpp.edu.br"
        />
        <Titulo2 />
        <Tabuada numero = {n}/> */}

        <Mensagem></Mensagem>

        <Header favcol="Laranja"></Header>
        <Header2></Header2>

        <ShouldUpdate></ShouldUpdate>
        <BeforeUpdate></BeforeUpdate>
        <DidUpdate></DidUpdate>

        <Container></Container>
      </div>
    );
}

export default App;
