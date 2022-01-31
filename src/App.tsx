import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { AppToolbar } from './features/task/containers/AppToolbar';
import { AddTask } from './features/task/containers/AddTask';
import { TaskList } from './features/task/containers/TaskList';
import { Box } from '@mui/system';


function App() {
  return (
    <Container maxWidth="lg">
      <AppToolbar />
      <AddTask />

      <Box sx={{
        m: {
          xs: '10px 0',
          sm: '10px 0',
          md: '15px 0',
          lg: '100px 0',
          xl: '100px 0',
        }
      }}>

        <TaskList />
      </Box>
    </Container >
  );
}

export default App;
