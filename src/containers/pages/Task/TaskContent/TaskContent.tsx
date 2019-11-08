import React from 'react';
import {
  BackButton,
  Close, DeleteButton,
  Description,
  Meta, MetaLink,
  MetaText,
  Title,
  TitleText,
} from './TaskContent.style';
import { Task as TaskType } from '../../../../core/utils/factories/task.factory';
import { Dispatch } from 'redux';
import { closeModal } from '../../../../core/redux/components/Modal/Modal.actions';
import { connect } from 'react-redux';
import { deleteTask } from '../../../../core/redux/data/Task/Task.actions';
import { RouterProps, withRouter } from 'react-router';

interface OwnProps {
  task: TaskType | null;
  modalView?: boolean;
}

interface ReduxDispatchProps {
  actions: {
    closeModal: () => void;
    deleteTask: () => void;
  }
}

interface Props extends OwnProps, ReduxDispatchProps, RouterProps {}

const TaskContent: React.FC<Props> = ({ task, modalView, actions, history }) => {
  const goToBoard = () => history.push('/');

  const onDeleteTask = () => {
    if (!modalView) {
      goToBoard();
    }

    actions.closeModal();
    actions.deleteTask();
  };

  if (!task) return <div>Task not found</div>;

  const link = `/task/${task.id}`;

  return (
    <>
      <Title>
        <TitleText value={task.title} />
        {modalView && <Close onClick={actions.closeModal}>X</Close>}
      </Title>

      <Description modalView={modalView} value={task.description} rows={6} />

      <Meta>
        <MetaText>Created at: {task.createdAt}</MetaText>
        <MetaText>Updated at: {task.updatedAt}</MetaText>
        {modalView && <MetaLink to={link} onClick={actions.closeModal}>Link</MetaLink>}
      </Meta>

      {!modalView && <BackButton title="Back to board" onClick={goToBoard}/>}
      <DeleteButton color="danger" title="Delete" onClick={onDeleteTask}/>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): ReduxDispatchProps => ({
  actions: {
    closeModal: () => dispatch(closeModal()),
    deleteTask: () => dispatch(deleteTask({ id: ownProps.task!.id })),
  },
});

export default withRouter<any, any>(connect(null, mapDispatchToProps)(TaskContent));