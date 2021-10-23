import { Modal, withStyles, Grid, Box } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import { Field, reduxForm } from 'redux-form';

const TaskForm = (props) => {
  const { classes,modalActionCreators } = props;
  const { actionHideModal } = modalActionCreators;
  return (
    <form>
      <Field name="email12312321" component="input" />
      <Grid container >
        <Grid item md={12}>
          <TextField id="standard-basic" label="name" className={classes.textField} />
        </Grid>
        <Grid item md={12}>
          <TextField id="standard-basic" label="name" className={classes.textField} />
        </Grid>
        <Grid md={12}>
          <Box display="flex" justifyContent="flex-end" mt={1}>
            <Button>Save</Button>
            <Button ml={1} onClick={actionHideModal}>Close</Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    actionHideModal: PropTypes.func,
  })
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME
});

export default compose(
  withStyles(styles),
  withConnect,withReduxForm
  )(TaskForm);

