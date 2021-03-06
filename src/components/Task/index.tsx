import React, { useState } from 'react';
import { Checkbox, FormControlLabel, TextField, Box, Button } from '@mui/material';

import { TTask } from '../../features/task/taskSlice';
import dayjs from 'dayjs';

export const Task = ({ task, onSubmit }: { task: TTask, onSubmit: (t: TTask) => void }) => {
  const [formData, setFormData] = useState(task)
  const submitHandler = () => {
    console.log(dayjs(formData.dueDate).unix())
    onSubmit({
      ...formData,
      dueDate: `${dayjs(formData.dueDate).unix()}`,
    })
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => e.target.select();
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: '10px 0', width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        autoFocus
        id="task-title"
        className="cy-task__title"
        label="Task Title"
        placeholder="Task Title"
        value={formData?.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
        onFocus={onFocus}
      />
      <TextField
        id="task-description"
        label="Task description"
        className="cy-task__description"
        placeholder="Task Description"
        value={formData?.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
        onFocus={onFocus}
      />
      <TextField
        type="date"
        id="task-dueDate"
        label="Due Date"
        className="cy-task__due-date"
        value={formData?.dueDate}
        onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
        onFocus={onFocus}
      />

      <FormControlLabel
        sx={{ width: '100%' }}
        control={(
          <Checkbox
            className="cy-task__is-done"
            value={formData?.isDone}
            onChange={e =>
              setFormData({
                ...formData,
                isDone: e.target.checked
              })
            }
          />
        )}
        label="Is task completed"
      />

      <FormControlLabel
        sx={{ width: '100%' }}
        label="Postpone task"
        control={(
          <Checkbox
            className="cy-task__is-postponed"
            value={formData?.isPostpone}
            onChange={e =>
              setFormData({
                ...formData,
                isPostpone: e.target.checked
              })
            }
          />
        )}
      />

      <Button className="cy-task__submit" onClick={submitHandler} variant="contained" autoFocus>
        Submit
      </Button>
    </Box>
  );
}

