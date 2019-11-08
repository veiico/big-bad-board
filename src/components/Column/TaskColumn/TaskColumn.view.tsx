import React, { ChangeEvent, KeyboardEvent } from 'react';
import { Cards, CardWrapper, Container, CreateTask, Input } from './TaskColumn.style';
import TaskCardContainer from '../../Card/TaskCard/TaskCard';
import CreateTaskCardContainer from '../../Card/CreateTaskCard/CreateTaskCard';
import { Task } from '../../../core/utils/factories/task.factory';
import { Column } from '../../../core/utils/factories/column.factory';

interface OwnProps {
  inputValue: string;
  column: Column;
  isCreatingTask: boolean;
  tasks: Task[];
  events: {
    changeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
    editColumn: (event: KeyboardEvent<HTMLInputElement>) => void;
    setCreatingTaskState: (state: boolean) => void;
    createTask: () => void;
  };
}

const TaskColumnView: React.FC<OwnProps> = ({
  inputValue,
  isCreatingTask,
  tasks,
  column,
  events,
}): React.ReactElement => (
  <Container>
    <Input
      value={inputValue}
      onChange={events.changeInputValue}
      placeholder="Create column"
      onKeyDown={events.editColumn}
    />

    <Cards>
      {!!tasks && !!tasks.length && tasks.map((task) => (
        <CardWrapper key={task.id}>
          <TaskCardContainer
            columnId={column.id}
            task={task}
          />
        </CardWrapper>
      ))}

      {isCreatingTask
        ? (
          <CardWrapper>
            <CreateTaskCardContainer
              columnId={column.id}
              afterCreate={() => events.setCreatingTaskState(false)}
            />
          </CardWrapper>
        )
        : <CreateTask title="Create task" onClick={events.createTask}/>
      }
    </Cards>
  </Container>
);

export default TaskColumnView;
