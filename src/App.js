import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Create from './components/Create/Create';
import Notes from './components/Notes/Notes';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
