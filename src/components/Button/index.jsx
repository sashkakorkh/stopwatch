import React from 'react';
import Button from '@mui/material/Button';

function Btn({text,onClick}) {
  return (
    <Button variant="contained" onClick={onClick}>{text}</Button>
  )
}

export default Btn
