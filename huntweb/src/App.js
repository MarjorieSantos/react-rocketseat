import React from "react";
import Header from './components/header/header.js';
import Main from './pages/main/index.js'
import './components/header/style.css'

//extende o componente do react
//componente - conjunto de parte estrutura, logica e estilização

//tem o método RENDER obrigatório
//className = porque class é uma palavra reservada do JS

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
)


export default App;
