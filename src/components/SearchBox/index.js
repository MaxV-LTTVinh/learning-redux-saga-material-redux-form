import { TextField, withStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

function SearchBox(props) {
  const { classes, handleChange } = props;
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        autoComplete="off"
        id="standard-basic"
        label="searchBox"
        placeholder="text test"
        onChange={handleChange} />
    </form>
  );
};
PropTypes.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func
};

export default withStyles(styles)(SearchBox);
