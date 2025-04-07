import './App.css';
import icon from './icon.png';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="header"> 
        <h2> alice lee </h2>
        <button className="menu-button"> menu </button>
      </header>
      {/* contents */}
      <main className="welcome">
        <img src={icon}/>
        <div className="tagline">
          <h1> hi! i'm alice. </h1>
          <h2> builder, leader, founder.</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
