import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Create from './components/Create/Create';
import Notes from './components/Notes/Notes';
import Signin from './components/Signin/Signin';
import SideDrawer from './components/SideDrawer/SideDrawer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4db5ff',
      dark: '#0095ff',
      light: '#63beff'
    },
    secondary: {
      main: '#42fff3',
      dark: '#39c4bb',
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
            <SideDrawer>
              <Route path="/notes">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </SideDrawer>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
