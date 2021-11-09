import { React, useContext, useState } from "react";
import { GlobalStoreContext } from '../store'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AuthContext from '../auth'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { auth } = useContext(AuthContext); 
  function hadnleClose(){
    auth.closeError();
  }
  return (
    <div>
      <Modal
        open={auth.errorMessage!=null}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Alert severity="error">{auth.errorMessage}</Alert>
          </Typography>
          <Button variant="contained" onClick={hadnleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
