import './App.css';
import Face from "./Face.png"
import Meme from './Meme';
function App() {

  function handleChange(event) {
    console.log(event)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={Face} alt="Funny Face" className='header--img' />
        <h1 className='header--title'>Meme Generator</h1>
        <h3 className='header--text'>Scrimba React Cource</h3>
      </header>
      <Meme />

    </div>
  );
}

export default App;
