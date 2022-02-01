
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

const appBarStyles = {
  top: {
    xs: 'auto',
    sm: 'auto',
    md: 'auto',
    lg: 0,
    xl: 0
  },
  bottom: {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 'auto',
    xl: 'auto',
  }
};

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  right: 30,
  bottom: 35,
  margin: '0 auto',
});

export const AppToolbar = ({ onAddClick }: {
  onAddClick: () => void
}) => (
  <AppBar position="fixed" color="primary" sx={appBarStyles}>
    <Toolbar>
      <IconButton color="inherit">
        <MenuIcon sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'none',
            lg: 'block',
            xl: 'block'
          }
        }} />
        <MoreIcon sx={{
          display: {
            lg: 'none',
            xl: 'none',
          }
        }} />
      </IconButton>

      <Box sx={{ flexGrow: 0.2 }} />
      <Typography variant="h4" component="h1">
        DOISH
      </Typography>
      <Box sx={{ flexGrow: 0.3 }} />

      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>

      <Box sx={{ flexGrow: 4 }} />

      <StyledFab
        className="cy-add-task"
        color="secondary"
        aria-label="add"
        sx={{
          bottom: {
            lg: -30,
            xl: -30
          }
        }}
        onClick={onAddClick}
      >
        <AddIcon />
      </StyledFab>

    </Toolbar>
  </AppBar>
)