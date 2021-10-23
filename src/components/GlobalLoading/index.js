import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import {connect } from 'react-redux';
import * as uiActions from '../../actions/ui';
import { withStyles } from '@material-ui/core';

function GlobalLoading(props) {
  const { classes, showLoading } = props;
  let xhtml = null;
  if(showLoading){
    xhtml = (
      <div className={classes.globalLoading}>
        Loading...
      </div>
    );
  }
  return xhtml;
};

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps,mapDispatchToProps);

// export default withStyles(styles)(mapDispatchToProps(GlobalLoading));
export default compose(
  withStyles(styles),
  withConnect
)(GlobalLoading);
