import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Character } from './types';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  media: {
    height: 200,
  },
});

const CharacterCard = (props: Character) => {
  const classes = useStyles();
  const { name, image } = props;

  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Link
        to={{
          pathname: props.id.toString(),
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={name} />
            <CardContent>
              <Typography gutterBottom variant='body1' component='h2'>
                {name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default CharacterCard;
