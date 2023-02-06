import logo from './logo.svg';
import './App.css';
import {Button} from './Button';
import {Names} from './Names';
import { NamesListContainer } from './NamesListContainer';
import { Clock } from './Clock';

function App() {
  const handleClick = (name) => {
    let greeting = 'Hello ';
    
    if(name){
      greeting += name;
    } else {
      let num = Math.floor(Math.random() * 10);
      let selectedName = Names[num];
      selectedName ? greeting += selectedName : greeting += 'Sir';
    }
  
    greeting += '!';
    alert(greeting);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Codecademy! It's <Clock /> O'clock
        </p>
        <Button onClick={() => handleClick()} label="Action button" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NamesListContainer />
      </header>
    </div>
  );
}

export default App;
