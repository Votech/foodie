import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
  root2: {
    width: '100%',
    marginBottom: '20px',
  },
  media: {
    height: 200,
    width: '100%',
  },
  actionArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  content: {},
});

const MealCard = ({ img, title, nutrients, id, nutrition }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={{
          pathname: `/recipe/${id}`,
          state: { id: id },
        }}
      >
        {img ? (
          <CardMedia className={classes.media} image={img} title={title} />
        ) : (
          <CircularProgress />
        )}
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h6' component='h2'>
            {title}
          </Typography>
        </CardContent>
        {nutrients ? (
          <Grid container>
            <Grid item container xs={3} direction='column'>
              <Typography variant='subtitle1' color='secondary' align='center'>
                Calories
              </Typography>
              <Typography gutterBottom variant='subtitle1' align='center'>
                {nutrients[0].amount}
              </Typography>
            </Grid>
            <Grid item container xs={3} direction='column'>
              <Typography variant='subtitle1' color='secondary' align='center'>
                Fat
              </Typography>
              <Typography gutterBottom variant='subtitle1' align='center'>
                {nutrients[1].amount}
              </Typography>
            </Grid>
            <Grid item container xs={3} direction='column'>
              <Typography variant='subtitle1' color='secondary' align='center'>
                Carbs
              </Typography>
              <Typography gutterBottom variant='subtitle1' align='center'>
                {nutrients[3].amount}
              </Typography>
            </Grid>
            <Grid item container xs={3} direction='column'>
              <Typography variant='subtitle1' color='secondary' align='center'>
                Protein
              </Typography>
              <Typography gutterBottom variant='subtitle1' align='center'>
                {nutrients[8].amount}
              </Typography>
            </Grid>
          </Grid>
        ) : null}
        <Grid container justify='center'>
          {nutrition
            ? nutrition[0]
              ? nutrition.map((n, i) => {
                  return (
                    <Grid item container xs={3} direction='column' key={i}>
                      <Typography
                        variant='subtitle1'
                        color='secondary'
                        align='center'
                      >
                        {nutrition[i].title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant='subtitle1'
                        align='center'
                      >
                        {nutrition[i].amount}
                      </Typography>
                    </Grid>
                  );
                })
              : null
            : null}
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default MealCard;
