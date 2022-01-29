import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { AppToolbar } from './features/task/containers/AppToolbar';
import { AddTask } from './features/task/containers/AddTask';
import { useAppSelector } from './app/hooks';
import { selectIsAdding } from './features/task/taskSlice';


function App() {
  const isLoading = useAppSelector(selectIsAdding);

  return (
    <Container maxWidth="lg">
      <AppToolbar />
      <AddTask />
    </Container >
  );
}

export default App;
