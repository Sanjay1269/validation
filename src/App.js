import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <div>
              <Link to=''>Home</Link>
              <Link to='/home'>Login</Link>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <Route exact ={true} path='' component={Home}/>
        <Route exact path='/home' component={Login}/>
      </div>

    </Router>
  );
}

export default App;
