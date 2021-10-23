import { TextField, withStyles, Modal, Button } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

function MaxModal(props) {
  const { handleClose, openDialog, classes, component, modalActionCreators, title } = props;
  const { actionHideModal } = modalActionCreators;
  return (
    <Modal open={openDialog === true} onClose={actionHideModal}>
      <div className={classes.modal} >
        <div className={classes.header}>
          <span>{title}</span>
          <Button ml={1} onClick={actionHideModal}>Close</Button>
        </div>
        <div className={classes.content}>
          {component}
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    openDialog: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};

PropTypes.propTypes = {
  classes: PropTypes.object,
  handleClose: PropTypes.func,
  openDialog: PropTypes.func,
  component: PropTypes.object,
  title: PropTypes.string,
  modalActionCreators: PropTypes.shape({
    actionHideModal: PropTypes.func,
  })
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(MaxModal);
