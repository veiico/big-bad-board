import React from 'react';
import { Card, Container } from './Modal.style';
import { Task } from '../../core/utils/factories/task.factory';
import { RootState } from '../../core/redux/reducers';
import { connect } from 'react-redux';
import TaskContent from '../../containers/pages/Task/TaskContent/TaskContent';

interface OwnProps {}

interface ReduxStateProps {
  modalOpen: boolean;
  task?: Task;
}

interface Props extends OwnProps, ReduxStateProps {}

const Modal: React.FC<Props> = ({ modalOpen, task }) => {
  if (!modalOpen || !task) return null;

  return (
    <Container>
      <Card>
        <TaskContent task={task} modalView={true}/>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state: RootState): ReduxStateProps => ({
  modalOpen: state.components.modal.opened,
  task: state.data.tasks.find((task) => task.id === state.components.modal.taskId),
});

export default connect(mapStateToProps)(Modal);
