import { Link } from 'react-router-dom';
import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 50,
      overflow: 'hidden',
    },
  },
  drawer: {
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 50,
    },
  },
  listItem: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant='permanent'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <List>
          <Link to='/' className={classes.listItem}>
            <ListItem button>
              <ListItemIcon>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              <ListItemText>Characters</ListItemText>
            </ListItem>
          </Link>
          <Link to='/episodes/' className={classes.listItem}>
            <ListItem button>
              <ListItemIcon>
                <MovieFilterIcon />
              </ListItemIcon>
              <ListItemText>Episodes</ListItemText>
            </ListItem>
          </Link>
          <Link to='/locations/' className={classes.listItem}>
            <ListItem button>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText>Locations</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
