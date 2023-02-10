import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Names } from './Names';
import Home from './Home';
import Button from './Button';
import NamesListContainer from './NamesListContainer';
import Clock from './Clock';
import InputFormContainer from './InputFormContainer';
import Users from './Users';

function App() {
  let username = Names[Math.floor(Math.random()* Names.length)];
  const handleClick = (name) => {
    let greeting = 'Hello ';

    if (name) {
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
    <Router>
        <div className="App">
          <header className="App-header">
            <main style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
              <Link style={{color: 'white'}} to='/'><h3>Menu</h3></Link>
                <ul style={{listStyleType: 'none', display: 'flex', alignItems: 'center'}}>
                  <li style={{margin: '16px', fontSize: '22px'}}><Link to={'/clock'} style={{color: 'white'}}>Clock</Link></li>
                  <li style={{margin: '16px', fontSize: '22px'}}><Link to={'/clock/'+username} style={{color: 'white'}}>Pers. Clock</Link></li>
                  <li style={{margin: '16px', fontSize: '22px'}}><Link to='/button' style={{color: 'white'}}>Button</Link></li>
                  <li style={{margin: '16px', fontSize: '22px'}}><Link to='/name-list' style={{color: 'white'}}>Name List</Link></li>
                  <li style={{margin: '16px', fontSize: '22px'}}><Link to='/input' style={{color: 'white'}}>Input</Link></li>
                  <li style={{margin: '16px', fontSize: '22px'}}><Link to='/users' style={{color: 'white'}}>Users</Link></li>
                </ul>
              </div>
              <Route exact path='/'>
                <Home />
              </Route>
              <Switch>
                <Route path='/clock/:username'>
                  <Clock />
                </Route>
                <Route path='/clock'>
                  <Clock />
                </Route>
              </Switch>
              <Route path='/button'>
                <Button onClick={() => handleClick()} label="Action button" />
              </Route>
              <Route path='/name-list'>
                <NamesListContainer />
              </Route>
              <Route path='/input'>
                <InputFormContainer />
              </Route>
              <Route path='/users'>
                <Users />
              </Route>
            </main>
          </header>
        </div>
    </Router>
  );
}

export default App;
