import { makeStyles, Container, Grid, Toolbar } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Data } from '../hooks/types';

type CardsListProps<T> = {
  isLoading: boolean;
  error: Error | null;
  data: Data<T> | undefined;
  children: JSX.Element[] | undefined;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    padding: '2rem',
    maxWidth: 'none',
  },
  pag: {
    padding: '0 0 2rem',
  },
}));

function CardsList<T>(props: CardsListProps<T>) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Toolbar />
        {props.data && (
          <Pagination
            count={props.data.info.pages}
            onChange={(_, p) => props.setPage(p)}
            page={props.page}
            classes={{ root: classes.pag }}
          />
        )}

        {props.isLoading && <span>Loading...</span>}
        {!props.isLoading && (
          <Grid container spacing={1}>
            {props.children}
          </Grid>
        )}
      </Container>

      {props.error && <span>Что-то пошло не так...</span>}
    </>
  );
}

export default CardsList;
