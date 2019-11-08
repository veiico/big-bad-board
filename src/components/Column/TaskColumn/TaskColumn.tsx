import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { RootState } from '../../../core/redux/reducers';
import { Dispatch } from 'redux';
import { editColumn } from '../../../core/redux/data/Column/Column.actions';
import { connect } from 'react-redux';
import { Task } from '../../../core/utils/factories/task.factory';
import { Column } from '../../../core/utils/factories/column.factory';
import TaskColumnView from './TaskColumn.view';

interface OwnProps {
  title?: string;
  column: Column;
}

interface ReduxStateProps {
  tasks: Task[];
}

interface ReduxDispatchProps {
  actions: {
    editColumn: ({ id, title }: { id: string; title: string; }) => void;
  }
}

interface Props extends OwnProps, ReduxStateProps, ReduxDispatchProps {}

const TaskColumn: React.FC<Props> = ({ title, column, tasks, actions }): React.ReactElement => {
  const [isCreatingTask, setCreatingTaskState] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>): void => setInputValue(event.currentTarget.value);
  const createTask = (): void => setCreatingTaskState(true);
  const editColumn = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return;

    actions.editColumn({
      id: column.id,
      title: event.currentTarget.value,
    });
  };

  const columnTasks: Task[] | null = tasks.filter((task) => column.tasks.includes(task.id));

  return (
    <TaskColumnView
      inputValue={inputValue || ''}
      tasks={columnTasks}
      column={column}
      isCreatingTask={isCreatingTask}
      events={{
        changeInputValue,
        createTask,
        editColumn,
        setCreatingTaskState,
      }}
    />
  );
};

const mapStateToProps = (state: RootState): ReduxStateProps => ({
  tasks: state.data.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): ReduxDispatchProps => ({
  actions: {
    editColumn: ({ id, title }) => dispatch(editColumn({ id, title, tasks: ownProps.column.tasks })),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskColumn);
