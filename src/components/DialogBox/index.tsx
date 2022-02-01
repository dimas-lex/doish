import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export const DialogBox = ({
  isOpen,
  title,
  children,
  onClose,
}: {
  isOpen: boolean;
  title: string;
  submitText: string;
  children?: React.ReactNode;
  onClose: () => void;
}) => {


  return (
    <Dialog
      className="cy-dialog-box"
      open={isOpen}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title" className="cy-dialog-box__title">
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
