import { createReducer } from 'typesafe-actions';
import { closeModal, openModal } from './Modal.actions';

type InitialState = {
  opened: boolean;
  taskId: string | null;
};

export const modalInitialState: InitialState = {
  opened: false,
  taskId: null,
};

export const modalReducer = createReducer(modalInitialState)
  .handleAction(openModal, (state, action) => ({
    opened: true,
    taskId: action.payload.taskId,
  }))
  .handleAction(closeModal, () => modalInitialState)
;





















