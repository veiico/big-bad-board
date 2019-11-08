import uuid from 'uuid/v4';
import { datesFactory } from './dates.factory';

export type CollectionFactory = {
  id: string;
  createdAt: string;
  updatedAt: string;
}

const create = (): CollectionFactory => ({
  id: uuid(),
  ...datesFactory.getManipulationDates(),
});

const update = (item: CollectionFactory & { [key: string]: any; }): any => ({
  ...item,
  ...datesFactory.getUpdateDate(),
});

export default {
  create,
  update,
}