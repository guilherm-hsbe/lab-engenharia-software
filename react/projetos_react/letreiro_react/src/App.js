import logo from './logo.svg';
import './App.css';

var string = "Venha Estudar na FATEC...";
var vazio = "";
var i = 0;

function App() {
  const element = (<h4>{vazio += string[i]}</h4>);
  i++;

  if (i <= string.length){
      ReactDOM.render(element,document.getElementById('root'));
  }

  setInterval(tick,50);

  return (
    <div className="App">
      <header className="App-header">
        <p>Letreiro.</p>
        <p id="root"></p>
      </header>
    </div>
  );
}

export default App;