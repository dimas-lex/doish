
import React from 'react';
import { Stack } from '@mui/material';
import { useAppSelector } from "../../../../app/hooks";
import { selectAllTasks } from "../../taskSlice";
import { TaskItem } from '../TaskItem';


export const TaskList = () => {
  const tasks = useAppSelector(selectAllTasks);

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
              <TaskItem task={task} />
            )
          })
          : <div className="cy-task-list__no-items" >No tasks defined</div>
      }
    </Stack>
  )
}