import React, { useState } from 'react';
import { Checkbox, FormControlLabel, TextField, Box, Button } from '@mui/material';

import { TTask } from '../../features/task/taskSlice';

export const Task = ({ task, onSubmit }: { task: TTask, onSubmit: (t: TTask) => void }) => {
  const [formData, setFormData] = useState(task)
  const submitHandler = () => onSubmit(formData);

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
        label="Task Title"
        placeholder="Task Title"
        value={formData?.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
        onFocus={onFocus}
      />
      <TextField
        id="task-description"
        label="Task description"
        placeholder="Task Description"
        value={formData?.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
        onFocus={onFocus}
      />
      <TextField
        type="date"
        id="task-dueDate"
        label="Due Date"
        value={formData?.dueDate}
        onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
        onFocus={onFocus}
      />

      <FormControlLabel
        sx={{ width: '100%' }}
        control={(
          <Checkbox
            value={formData?.isDone}
            onChange={e =>
              setFormData({
                ...formData,
                isDone: e.target.value === 'true'
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
            value={formData?.isPostpone}
            onChange={e =>
              setFormData({
                ...formData,
                isPostpone: e.target.value === 'true'
              })
            }
          />
        )}
      />

      <Button onClick={submitHandler} variant="contained" autoFocus>
        Submit
      </Button>
    </Box>
  );
}

