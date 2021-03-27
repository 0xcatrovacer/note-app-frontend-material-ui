import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Create from './components/Create/Create';
import Notes from './components/Notes/Notes';

import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4db5ff',
      dark: '#0095ff',
      light: '#63beff'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
