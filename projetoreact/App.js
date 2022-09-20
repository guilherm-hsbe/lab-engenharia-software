import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" class="container">
      <header className="App-header">
        <img src={"https://logos-download.com/wp-content/uploads/2019/11/Fatec_Logo.png"} className="App-logo" alt="logo" />
        <p>
          Se Inscreva no Vestibular da Fatec.
        </p>
        <a className="App-link" href="https://www.vestibularfatec.com.br/home/" target="_blank" rel="noopener noreferrer">Inscreva-se</a>
      </header>

      <div class="meioPagina">
        <div class="listaCursos">
          <h3>Cursos Oferecidos</h3>  
          <ul>
            <li>Agronegócio </li>
              <p id="break">Noite - 40 vagas</p>

            <li>Análise de Desenvolvimento de Sistemas</li>
              <p id="break">Manhã - 40 vagas</p>
              <p id="break">Noite - 40 vagas</p>

            <li>Eventos</li>
              <p id="break">Noite - 40 vagas</p>

            <li>Gestão Empresarial</li>
              <p id="break">Noite - 40 vagas</p>
              <p id="break">EaD - 20 vagas</p>

            <li>Marketing</li>
              <p id="break">Manhã - 40 vagas</p>

            <li>Produção Agropecuária</li> 
              <p>Manhã  - 40 vagas</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
