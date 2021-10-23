import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import { Box, Grid } from '@material-ui/core';
import styles from './styles';
import { STATUSES } from '../constants';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import * as taskActions from '../actions/task';
import * as modalActions from '../actions/modal';
import { toast } from 'react-toastify';
import SearchBox from '../components/SearchBox';
import PropTypes from 'prop-types';
import { fetchListTask } from '../actions/task';


function TaskBoar(props) {
  const { classes } = props;
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const { taskActionCreators } = props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }, []);

  const board = () => {
    const { tasks } = props;
    return (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => (
          <Grid item md={4} xs={12} key={index}>
            <Box mt={1} mb={1}>
              <div className={classes.taskBoar}>
                {status.label}
              </div>
            </Box>
            <TaskList tasks={tasks} status={status} />
          </Grid>
        ))}
      </Grid>
    );
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const renderForm = () => {
    let xhtml = null;
    xhtml = (<TaskForm openDialog={openDialog} handleClose={handleClose} />);

    return xhtml;
  };
  const openForm = () => {
    // setOpenDialog(true);
    const { modalActionCreators } = props;
    const {
      actionShowModal,
      actionHideModal,
      actionChangeModalTitle,
      actionChangeModalContent
    } = modalActionCreators;
    actionShowModal();
    actionChangeModalTitle('Thêm công việc');
    actionChangeModalContent(<TaskForm />)

  };

  const handleFilter = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { taskActionCreators } = props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  const loadData = () => {
    const { taskActionCreators } = props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  };

  const renderSearchBox = () => {
    let xhtml = null;
    xhtml = (
      <SearchBox handleChange={handleFilter} />
    );
    return xhtml;
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={loadData}>
        Load Data
      </Button>
      <Button variant="contained" color="primary" onClick={openForm}>
        <AddIcon />
        Add task
      </Button>
      {renderSearchBox()}
      {board()}
    </div>
  );
}

const mapStateToProps = state => {
  return { tasks: state.task.listTask };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};

PropTypes.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func
  }),
  modalActionCreators: PropTypes.shape({
    actionShowModal: PropTypes.func,
    actionHideModal: PropTypes.func,
    actionChangeModalTitle: PropTypes.func,
    actionChangeModalTitleContent: PropTypes.func,
  })
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoar));
