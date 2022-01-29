import React from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectIsAdding, toggleAddTask, TTask } from "../../taskSlice";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { DialogBox } from "../../../../components/DialogBox";
import { Task } from "../../../../components/Task";

export const AddTask = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsAdding);

  const closeAddTask = () => dispatch(toggleAddTask());

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
      onSubmit={closeAddTask}
    >
      <Task task={task} />
    </DialogBox>
  );
}
