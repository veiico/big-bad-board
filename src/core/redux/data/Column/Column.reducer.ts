import { createReducer } from 'typesafe-actions';
import { createColumn, deleteColumn, editColumn } from './Column.actions';
import columnFactory, { Column } from '../../../utils/factories/column.factory';
import collectionItemFactory from '../../../utils/factories/collectionItem.factory';
import { createTask, deleteTask } from '../Task/Task.actions';

type InitialState = Column[];

export const columnInitialState: InitialState = [];

export const columnReducer = createReducer(columnInitialState)
  .handleAction(createColumn, (state, action) => [...state, columnFactory.create(action.payload)])
  .handleAction(editColumn, (state, action) => [...state].map((column) => {
    if (column.id !== action.payload.id) return column;

    return collectionItemFactory.update({ ...column, ...action.payload });
  }))
  .handleAction(deleteColumn, (state, action) => [...state].filter(column => column.id !== action.payload.id))
  .handleAction(createTask, (state, action) => [...state].map((column) => {
    if (action.payload.columnId !== column.id) return column;

    return {
      ...column,
      tasks: [
        ...column.tasks,
        action.payload.id,
      ],
    }
  }))
  .handleAction(deleteTask, (state, action) => [...state].map((column) => {
    if (!column.tasks.includes(column.id)) return column;

    return {
      ...column,
      tasks: [...column.tasks].filter((task) => task !== action.payload.id),
    }
  }))
;



