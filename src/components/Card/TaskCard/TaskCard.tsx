import React, { KeyboardEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { editTask } from '../../../core/redux/data/Task/Task.actions';
import { Task } from '../../../core/utils/factories/task.factory';
import { openModal } from '../../../core/redux/components/Modal/Modal.actions';
import Card from '../Card';

interface OwnProps {
  task: Task;
  columnId: string;
}

interface ReduxDispatchProps {
  actions: {
    editTask: ({ id, title }: { id: string; title: string; }) => void;
    openModal: ({ taskId }: { taskId: string; }) => void;
  }
}

interface Props extends OwnProps, ReduxDispatchProps {}

const TaskCard: React.FC<Props> = ({ task, actions }) => {
  const editTask = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return;

    actions.editTask({
      id: task.id,
      title: event.currentTarget.value,
    });
  };

  const openModal = (): void => {
    actions.openModal({
      taskId: task.id,
    });
  };

  return (
    <Card
      title={task.title}
      events={{
        editTitle: editTask,
        clickContainer: openModal,
      }}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): ReduxDispatchProps => ({
  actions: {
    editTask: ({ id, title }) => dispatch(editTask({ id, title })),
    openModal: ({ taskId }) => dispatch(openModal({ taskId })),
  },
});

export default connect(null, mapDispatchToProps)(TaskCard);
