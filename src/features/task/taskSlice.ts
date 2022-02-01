import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchTasks } from './taskAPI';

export type TTask = {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  isDone: boolean;
  isPostpone: boolean;
};

export interface CounterState {
  tasks: TTask[];
  status: 'idle' | 'loading' | 'failed';
  isAdding: boolean;
}

const initialState: CounterState = {
  tasks: [],
  status: 'idle',
  isAdding: false,
};

export const toggleAddTask = createAction('task/toggleAddTask');
export const addNewTask = createAction<{ task: TTask }>('task/addNewTask');
export const postponeTask = createAction<{ id: string}>('task/postponeTask');

export const fetchTasksAsync = createAsyncThunk(
  'task/fetchTasksAsync',
  async () => {
    const response = await fetchTasks();
    // The value we return becomes the `fulfilled` action payload
    return response.data || [] as TTask[];
  }
);

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(toggleAddTask, (state) => {
        state.isAdding = !state.isAdding;
      })
      .addCase(fetchTasksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = action.payload
        console.log(action.payload)
      })
      .addCase(postponeTask, (state, action) => {
        const task = state.tasks.find((task) => task.id === action.payload.id) ;
        if (task) {
          task.isPostpone = !task?.isPostpone;
        }

      })
      .addCase(addNewTask, (state, action) => {
        state.tasks = [...state.tasks, action.payload.task]

      });
  },
});



export const selectAllTasks = (state: RootState) => state.task.tasks;
export const selectIsAdding = (state: RootState) => state.task.isAdding;



export default taskSlice.reducer;
