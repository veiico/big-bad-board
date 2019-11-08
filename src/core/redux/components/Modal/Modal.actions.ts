import { createStandardAction } from 'typesafe-actions';

interface OpenModal { taskId: string; }

export const openModal = createStandardAction('modal/OPEN')<OpenModal>();
export const closeModal = createStandardAction('modal/CLOSE')();
