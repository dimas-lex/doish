import localforage from 'localforage';
import { TTask } from './taskSlice';

const LS_KEY = 'DOISH'


export async function fetchTasks() {
  const data = (await localforage.getItem(LS_KEY)) as TTask[];
  return {
    data,
  };
}


export function addTask(task: TTask) {
  return localforage.getItem(LS_KEY)
}
