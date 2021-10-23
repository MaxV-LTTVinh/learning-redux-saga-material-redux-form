import * as modalTypes from '../constants/modal';
import { Component } from 'react';

export const actionShowModal = () => ({
  type: modalTypes.SHOW_MODAL,
});

export const actionHideModal = () => ({
  type: modalTypes.HIDE_MODAL,
});

export const actionChangeModalTitle = (title) => ({
  type: modalTypes.CHANGE_MODAL_TITLE,
  payload: { title },
});

export const actionChangeModalContent = (component) => ({
  type: modalTypes.CHANGE_MODAL_CONTENT,
  payload: { component },
});
