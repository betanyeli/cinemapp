import * as React from 'react';
import { List, DialogTitle, Dialog } from '@mui/material';
import ShareComponent from '@/components/shareComponent'

function SimpleDialog(props) {
  const { onClose, selectedValue, open, ...rest } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Share movie</DialogTitle>
      <List sx={{ p: 10 }}>
        <ShareComponent {...rest} />
      </List>
    </Dialog>
  );
}


export default function Modal(props) {
  const { open, setOpen, ...rest } = props
  const [selectedValue, setSelectedValue] = React.useState(null);


  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        {...rest}
      />
    </div>
  );
}
