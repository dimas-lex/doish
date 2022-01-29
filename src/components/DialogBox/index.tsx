import React from 'react';
import { Button, Dialog, DialogActions, DialogContent,  DialogTitle } from '@mui/material';

export const DialogBox = ({
  isOpen,
  title,
  submitText,
  children,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  title: string;
  submitText: string;
  children?: React.ReactNode;
  onClose: () => void;
  onSubmit: () => void;
}) => {


  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">
        {title}
      </DialogTitle>

      <DialogContent
        sx={{
          minWidth: 210,
          minHeight: 180,
        }}>
          {children}
      </DialogContent>

      {/* <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit} variant="contained" autoFocus>
          {submitText}
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}
