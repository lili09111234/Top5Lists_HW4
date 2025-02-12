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

export default function DModal() {
  const { store } = useContext(GlobalStoreContext); 
  function handledelete(){
    store.deleteMarkedList();
  }
  function handleClose(){
    store.unmarkListForDeletion();
  }
  var name="";
  if(store.listMarkedForDeletion){
    name = store.listMarkedForDeletion.name;
  }
  return (
    <div>
      <Modal
        open={store.listMarkedForDeletion!=null}
        onClose={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Warning
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Alert severity="warning">Are you sure you want to delete list {name}</Alert>
          </Typography>
          <Button variant="contained" onClick={handledelete}>YES,DLETE THIS LIST</Button>
          <Button  variant="contained" onClick={handleClose}>NO,DO NOT DELETE</Button>
        </Box>
      </Modal>
    </div>
  );
}
