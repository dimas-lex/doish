import React from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addNewTask, selectIsAdding, toggleAddTask, TTask } from "../../taskSlice";
import { DialogBox } from "../../../../components/DialogBox";
import { Task } from "../../../../components/Task";

export const AddTask = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsAdding);

  const closeAddTask = () => dispatch(toggleAddTask());
  const submitTaskHandler = (task: TTask) => {
    dispatch(addNewTask({task}));
    closeAddTask()
  }

  const task = {
    id: uuidv4(),
    title: "Launch a spacecraft",
    description: "",
    dueDate: dayjs().add(1, "day").format('YYYY-MM-DD'),
    isDone: false,
    isPostpone: false,
  } as TTask;

  return (
    <DialogBox
      isOpen={isOpen}
      title="New TO DO"
      submitText="Add New"
      onClose={closeAddTask}
    >
      <Task task={task} onSubmit={submitTaskHandler} />
    </DialogBox>
  );
}
