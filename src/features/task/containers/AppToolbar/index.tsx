import React from 'react';
import { useAppDispatch } from "../../../../app/hooks";
import { AppToolbar as Toolbar } from '../../../../components';
import { toggleAddTask } from "../../taskSlice";


export const AppToolbar = () => {
  const dispatch = useAppDispatch();
  const onAddClick = () => {
    dispatch(toggleAddTask())
  };

  return (
    <Toolbar onAddClick={onAddClick} />
  )
}