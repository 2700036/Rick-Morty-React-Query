import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 5,
  },
  logo: {
    fontFamily: "'Creepster', cursive",
    fontSize: '2rem',
    color: theme.palette.grey[900],
  },
  tollbarRoot: { display: 'flex', justifyContent: 'space-between' },
  headerRoot: {
    background: 'linear-gradient(45deg, #3C7E46 30%, #FAF074 90%)',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar} classes={{ root: classes.headerRoot }}>
      <Container fixed>
        <Toolbar classes={{ root: classes.tollbarRoot }}>
          <Route exact path='/characters/'>
            <Typography variant='body1' align='center'>
              Characters
            </Typography>
          </Route>
          <Route path='/episodes/'>
            <Typography variant='body1' align='center'>
              Episodes
            </Typography>
          </Route>
          <Route exact path='/locations/'>
            <Typography variant='body1' align='center'>
              Locations
            </Typography>
          </Route>
          <Typography variant='body1' align='center' className={classes.logo}>
            Rick & Morty
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
