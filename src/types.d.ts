import { ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof import('./actions').default>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

type Id = {
  id: string;
}

type ObjectManipulationDates = {
  createdAt: string;
  updatedAt: string;
}