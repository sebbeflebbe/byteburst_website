import './App.css';
import logo from './byteburstlogo.jpg';

function App() {
  return (
    <div className="App">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet"/>
      </head>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="byteburst-container">
          <p className="byteburst-text">
            <strong>ByteBurst</strong>
          </p>
        </div>
      </div>
      <div className="board-container">
        <div className="board blue-board">
          <button className="button dark-blue-button">Vision</button>
          <button className="button dark-blue-button">Our Projects</button>
          <button className="button dark-blue-button">Our Consultants</button>
          <button className="button dark-blue-button">Contact</button>
        </div>
        <div className="board dark-green-board"></div>
      </div>
    </div>
  );
}

export default App;
