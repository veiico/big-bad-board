import React from 'react';
import { RootState } from '../../../core/redux/reducers';
import { Task as TaskType } from '../../../core/utils/factories/task.factory';
import { connect } from 'react-redux';
import TaskContent from './TaskContent/TaskContent';
import { RouteComponentProps } from 'react-router';
import { Container } from './Task.styles';

interface RouterProps {
  id: string;
}

interface OwnProps extends RouteComponentProps<RouterProps> {}

interface ReduxStateProps {
  task: TaskType | null;
}

interface Props extends OwnProps, ReduxStateProps {}

const Task: React.FC<Props> = ({ task }) => {
  return <Container><TaskContent task={task}/></Container>
};

const mapStateToProps = (state: RootState, ownProps: OwnProps): ReduxStateProps => ({
  task: state.data.tasks.find((task) => task.id === ownProps.match.params.id) || null,
});

export default connect(mapStateToProps)(Task);