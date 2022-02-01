import React from 'react';
import dayjs from 'dayjs';
import { Box, Button, Card, Switch, Typography } from '@mui/material';
import { TTask } from '../../features/task/taskSlice';

export const TaskItem = ({ task, onPostpone, onDone }:
  {
    task: TTask,
    onPostpone: (id: TTask["id"]) => void,
    onDone: (id: TTask["id"]) => void,
  }) => {

  return (
    <Card sx={{
      display: 'flex',
       alignItems: 'center',
       p: '10px',
      backgroundColor: task.isPostpone ? 'grey.100' : (task.isDone ? 'grey.500' : 'grey.50'),
    }} >
      <input type="hidden" className="cy-task-item__id" value={task.id} />

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '3 3 auto' }}>
        <Box sx={{ mb: '15px' }}>
          <Typography component="h3" variant="h5" className="cy-task-item__title">
            {task.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" className="cy-task-item__due-date">
            {dayjs.unix(+task.dueDate).format('DD MMM YYYY')}
          </Typography>
        </Box>

        <Typography variant="body1" component="p" className="cy-task-item__description">
          {task.description}
        </Typography>
      </Box>

      <Box sx={{ flex: '1 1 auto' }}>
        <Switch
          className="cy-task-item__postponed"
          disabled={task.isDone}
          checked={task.isPostpone}
          onChange={() => onPostpone(task.id)}
          inputProps={{ 'aria-label': 'Postpone task' }}
        />
      </Box>

      <Box sx={{ flex: '1 1 auto' }}>
        <Button variant="contained" className="cy-task-item__delete" onClick={() => onDone(task.id)}>
          {task.isDone ? 'Undone' : 'Done'}
        </Button>
      </Box>

    </Card>
  )
}

