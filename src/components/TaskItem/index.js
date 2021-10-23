import {
  IconButton, withStyles, Typography, Grid,
} from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styles from './styles';

const TaskItem = (props) => {
  const {
    title, status, classes, task,
  } = props;
  return (
    <Card>
      <CardContent>
        <Grid
          container
          justifyContent="space-between"
        >
          <Grid item md={8}>
            <Typography>
              {title}
            </Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>{task.description}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton style={{ border: '1px solid ' }} aria-label="edit" variant="contained" color="primary" size="small">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton style={{ border: '1px solid ' }} aria-label="delete" variant="contained" color="primary" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
// eslint-disable-next-line no-undef
export default withStyles(styles)(TaskItem);
