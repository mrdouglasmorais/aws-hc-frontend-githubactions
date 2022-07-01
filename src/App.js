import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Mais um projeto desenvolvido em ReactJS.</code>.
        </p>
        <p>Ambiente de Produção {'Release v1'}</p>
        <a
          className="App-link"
          href="https://github.com/mrdouglasmorais"
          target="_blank"
          rel="noopener noreferrer"
        >
          Professor Douglas Morais
        </a>
      </header>
    </div>
  );
}

export default App;
