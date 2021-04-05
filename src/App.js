import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Create from './components/Create/Create';
import Notes from './components/Notes/Notes';
import Signin from './components/Signin/Signin';
import Layout from './components/Layout/Layout';

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Register from './components/Signin/Register';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4db5ff',
      dark: '#0095ff',
      light: '#63beff'
    },
    secondary: {
      main: '#ff0000',
      dark: '#c21010',
      light: '#8cfff8'
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
              <Signin />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Layout>
              <Route path="/notes">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Layout>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
