import React from 'react';
import logo from './logo.svg';
import './App.css';
// Non Boiler Plate imports below
//Components
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from ".components/FreindCard";
import Footer from "./components/Footer";
// Card images
import image from ".images.json";

// Set state to 0 or empty
class App extends Component {
  state = {
    image,
    clickedImage: [],
    score: 0 
  }
};

// when you click on a card that image is taken out of the array
imageClick = event => {
  const currentImage = event.target.alt;
  const ImageAlreadyClicked = this.state.clickedImage.indexOf(currentImage) > -1;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
