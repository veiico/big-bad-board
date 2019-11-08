import React from 'react';
import { Column as ColumnView, Container } from './Board.styles';
import { RootState } from '../../../core/redux/reducers';
import { createColumn } from '../../../core/redux/data/Column/Column.actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CreateColumn from '../../../components/Column/CreateColumn/CreateColumn';
import { Column, ColumnData } from '../../../core/utils/factories/column.factory';
import TaskColumn from '../../../components/Column/TaskColumn/TaskColumn';

interface ReduxStateProps {
  columns: Column[];
}

interface ReduxDispatchProps {
  actions: {
    createColumn: (column: ColumnData) => void;
  }
}

interface Props extends ReduxStateProps, ReduxDispatchProps {}

const Board: React.FC<Props> = ({ columns }) => {
  return (
    <Container>
      {columns.map((column) => {
        return (
          <ColumnView key={column.id}>
            <TaskColumn
              title={column.title}
              column={column}
            />
          </ColumnView>
        );
      })}

      <ColumnView>
        <CreateColumn />
      </ColumnView>
    </Container>
  );
};

const mapStateToProps = (state: RootState): ReduxStateProps => ({
  columns: state.data.columns,
});

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  actions: {
    createColumn: (column) => dispatch(createColumn(column))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);