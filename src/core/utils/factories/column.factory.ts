import collectionItemFactory, { CollectionFactory } from './collectionItem.factory';

export type ColumnData = {
  title: string;
  tasks: string[];
};

export type Column = ColumnData & CollectionFactory;

const create = ({ title = '', tasks = [] }: ColumnData): Column => ({
  ...collectionItemFactory.create(),
  title,
  tasks,
});

export default {
  create,
};