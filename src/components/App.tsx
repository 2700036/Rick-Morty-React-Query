import Header from './Header';
import Menu from './Menu';
import { Redirect, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Characters from '../pages/Characters';
import Episodes from '../pages/Episodes';
import Locations from '../pages/Locations';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  root: {
    display: 'flex',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Menu />
      <Route exact path='/'>
        <Redirect to='/characters/' />
      </Route>
      <Switch>
        <Route path='/characters/:id?' component={Characters} />
        <Route path='/episodes/:id?' component={Episodes} />
        <Route path='/locations/:id?' component={Locations} />
      </Switch>
    </div>
  );
};

export default App;
