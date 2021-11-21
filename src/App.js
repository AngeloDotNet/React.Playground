import './App.css';
import {Home} from './Home';
import {Clienti} from './Clienti';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Demo React JS
      </h3>
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">Home Page</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/clienti">Clienti</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/clienti' component={Clienti}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;