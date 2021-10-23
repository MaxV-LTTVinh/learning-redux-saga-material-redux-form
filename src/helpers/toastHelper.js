import React from 'react';
import { toast } from 'react-toastify';

export const toastError = err => {
  const message = err;
  if(message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message);
  }
};
