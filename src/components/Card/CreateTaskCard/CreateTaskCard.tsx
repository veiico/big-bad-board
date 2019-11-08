import React, { KeyboardEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createTask } from '../../../core/redux/data/Task/Task.actions';
import taskFactory, { Task } from '../../../core/utils/factories/task.factory';
import Card from '../Card';

interface OwnProps {
  columnId: string;
  afterCreate?: () => void;
}

interface ReduxDispatchProps {
  actions: {
    createTask: ({ task }: { task: Task }) => void;
  }
}

interface Props extends OwnProps, ReduxDispatchProps {}

const CreateTaskCard: React.FC<Props> = ({ afterCreate, columnId, actions }) => {
  const createTask = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return;

    const task: Task = taskFactory.create({
      title: event.currentTarget.value,
    });

    actions.createTask({ task });

    if (afterCreate) afterCreate();
  };

  return (
    <Card
      title=""
      events={{
        editTitle: createTask,
      }}
      focusOnLoad={true}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): ReduxDispatchProps => ({
  actions: {
    createTask: ({ task }) => dispatch(createTask({ ...task, columnId: ownProps.columnId })),
  },
});

export default connect(null, mapDispatchToProps)(CreateTaskCard);
