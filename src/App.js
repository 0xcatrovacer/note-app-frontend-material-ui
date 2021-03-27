import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
          </Route>
          <Route path="/create">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
