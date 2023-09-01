import React from 'react';
// import { Alert } from '@material-ui/lab'; //download lab

function Message({ variant, children }) {
  return (
    <span severity={variant}>
      {children}
    </span>
  );
}

export default Message;
