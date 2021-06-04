import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Character, Location, DetailsProps, Episode } from './types';
import useRickMortyItemsById from '../hooks/useRickMortyItemById';
import DetailsItem from './DetailsItem';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'auto',
  },
  media: {
    height: 600,
  },
});

function CharacterDetails({ match }: DetailsProps) {
  const classes = useStyles();
  const characterId = match.params.id;
  const { isLoading, error, data } = useRickMortyItemsById<Character>('character', characterId);

  return (
    <>
      {isLoading && (
        <img src='https://res.cloudinary.com/teepublic/image/private/s--28vzMZpW--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1573109936/production/designs/6626609_0.jpg' />
      )}
      {data && (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={data.image} title={data.name} />
            <CardContent>
              <Typography gutterBottom variant='h6' component='h2'>
                {data.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {data.species}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {data.gender}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                location: {data && <DetailsItem<Location> itemUrl={data.location.url} />}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Episodes:{' '}
                {data &&
                  data.episode.map((ep, i, arr) => {
                    return (
                      <>
                        <DetailsItem<Episode> itemUrl={ep} key={ep+i} />
                        {i === arr.indexOf(arr[arr.length - 1]) ? '.' : ', '}
                      </>
                    );
                  })}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      {error && <span>Что-то пошло не так...</span>}
    </>
  );
}

export default CharacterDetails;
