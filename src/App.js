import logo from './brooklyn-nets-logo.svg';
import nbaLogo from './nba-logo-transparent.png';
import hero from './Nets-article_FB-scaled.jpeg';
import harden from './player-photos/james-harden.png';
import kyrie from './player-photos/kyrie-irving.png';
import kevin from './player-photos/kevin-durant.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <header>
      <img src={logo} alt="Brooklyn Nets Logo" className="brooklyn-nets-logo"></img>
      <h1 className="type-treatment page-heading">Brooklyn Nets Team Roster 2021 - 2022</h1>
      <img src={nbaLogo} alt="NBA Logo" className="nba-logo"></img>
    </header>

    <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="intro-text"> 
        <h3 className="type-treatment">Meet the Team</h3>
        <p>Read the stats from your favorite basketball players on the Brooklyn Nets</p>
      </div>

    </div>
    <footer>
      <ul>
        <li>Brooklyn Nets Team Roster</li>
        <li>
          <a href="https://github.com/leahjs/bk-nets" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  </div>
  );
}

export default App;
