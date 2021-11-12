import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navber/Navbar';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Function1 from './pages/Function1';

function App() {
  return (
    <div>
      <header>
        <h2>Test Frontend</h2>
      </header>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pokemon">
              <Pokemon />
            </Route>
            <Route path="/function1">
              <Function1 />
            </Route>
            <Route path="/function2">
              <Function1 />
            </Route>
            <Route path="/function3">
              <Function1 />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
