import collectionItemFactory, { CollectionFactory } from './collectionItem.factory';

export type TaskData = {
  title: string;
  description?: string;
};

export type Task = TaskData & CollectionFactory;

const create = ({ title = '', description = '' }: TaskData): Task => ({
  ...collectionItemFactory.create(),
  title,
  description,
});

export default {
  create,
};