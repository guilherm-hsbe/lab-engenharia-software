import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" class="container">
      <header className="App-header">
        <img src={"https://logos-download.com/wp-content/uploads/2019/11/Fatec_Logo.png"} className="App-logo" alt="" />
        <p>Se Inscreva no Vestibular da Fatec 2023.</p>
        <p id="inscricoes">Inscrições de 21/10 até 08/12.</p>

        <a className="App-link" href="https://www.vestibularfatec.com.br/home/" target="_blank" rel="noopener noreferrer">Inscreva-se</a>
      </header>

      <div class="meio-pagina">
        <div class="fatec-definicao">
          <h3>O que é a Fatec?</h3>  
          <p>A Fatec SP é uma das principais faculdades especializadas 
            em educação tecnológica do país, e são oferecidas vagas em 
            mais de 70 cursos de graduação presenciais, totalmente gratuitos. 
            Com 45 anos de existência, a Fatec é conhecida por preparar 
            o aluno para o mercado de trabalho, criando boas oportunidades 
            de contratação após a graduação.</p>
        </div>

        <div class="lista-cursos">
          <h3>Cursos Oferecidos</h3>  
          <ul>
            <li>Agronegócio </li>
              <p>Noite - 40 vagas</p>

            <li>Análise de Desenvolvimento de Sistemas</li>
              <p>Manhã - 40 vagas</p>
              <p>Noite - 40 vagas</p>

            <li>Eventos</li>
              <p>Noite - 40 vagas</p>

            <li>Gestão Empresarial</li>
              <p>Noite - 40 vagas</p>
              <p>EaD - 20 vagas</p>

            <li>Marketing</li>
              <p>Manhã - 40 vagas</p>

            <li>Produção Agropecuária</li> 
              <p>Manhã  - 40 vagas</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
