import { createStandardAction } from 'typesafe-actions';
import { Id } from '../../../../types';
import { TaskData } from '../../../utils/factories/task.factory';

export interface CreateTask extends TaskData { columnId: string; }
export interface EditTask extends Id, TaskData {}
export interface DeleteTask extends Id {}

export const createTask = createStandardAction('task/CREATE')<CreateTask>();
export const deleteTask = createStandardAction('task/DELETE')<DeleteTask>();
export const editTask = createStandardAction('task/EDIT')<EditTask>();
