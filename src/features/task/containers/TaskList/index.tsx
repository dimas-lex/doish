
import React from 'react';
import { Stack } from '@mui/material';
import { useAppSelector } from "../../../../app/hooks";
import { selectAllTasks } from "../../taskSlice";
import { TaskItem } from '../TaskItem';


export const TaskList = () => {
  let tasks = useAppSelector(selectAllTasks);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
      className="cy-task-list"
    >
      {
        tasks.length
          ? tasks.map((task) => {
            return (
              <div className="cy-task-list__item">
                <TaskItem key={task.id} task={task} />
              </div>
            )
          })
          : <div className="cy-task-list__no-items">No tasks defined</div>
      }
    </Stack>
  )
}