import { createStandardAction } from 'typesafe-actions';
import { Id } from '../../../../types';
import { ColumnData } from '../../../utils/factories/column.factory';

export interface CreateColumn extends ColumnData {}
export interface EditColumn extends Id, ColumnData {}
export interface DeleteColumn extends Id {}

export const createColumn = createStandardAction('column/CREATE')<CreateColumn>();
export const deleteColumn = createStandardAction('column/DELETE')<DeleteColumn>();
export const editColumn = createStandardAction('column/EDIT')<EditColumn>();
