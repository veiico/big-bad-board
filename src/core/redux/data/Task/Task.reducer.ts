import { createReducer } from 'typesafe-actions';
import { createTask, deleteTask, editTask } from './Task.actions';
import collectionItemFactory from '../../../utils/factories/collectionItem.factory';
import { Task } from '../../../utils/factories/task.factory';

type InitialState = Task[];

export const taskInitialState: InitialState = [];

export const taskReducer = createReducer(taskInitialState)
  .handleAction(createTask, (state, action) => [...state, action.payload])
  .handleAction(editTask, (state, action) => [...state.map((task) => {
    if (task.id !== action.payload.id) return task;

    return collectionItemFactory.update({ ...task, ...action.payload });
  })])
  .handleAction(deleteTask, (state, action) => [...state.filter(task => task.id !== action.payload.id)])
;





















