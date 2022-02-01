import React from 'react';
import { postponeTask,doneTask, TTask } from "../../taskSlice";
import { useAppDispatch } from '../../../../app/hooks';
import { TaskItem as TaskComponent } from '../../../../components/TaskItem';


export const TaskItem = ({ task }: { task: TTask }) => {
  const dispatch = useAppDispatch();

  const postponeHandler = (id: string) => {
    dispatch(postponeTask({ id }));
  }
  const doneHandler = (id: string) => {
    dispatch(doneTask({ id }));
  }

  return (
    <TaskComponent task={task} onPostpone={postponeHandler} onDone={doneHandler} />
  );
}
