import React from 'react';
import { CircularProgress } from '@material-ui/core';

function Loader() {
  return (
    <CircularProgress
      color="primary"
      size={100}
      style={{ margin: 'auto', display: 'block' }}
    />
  );
}

export default Loader;
