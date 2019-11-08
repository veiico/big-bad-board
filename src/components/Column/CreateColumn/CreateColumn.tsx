import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Dispatch } from 'redux';
import { createColumn } from '../../../core/redux/data/Column/Column.actions';
import { connect } from 'react-redux';
import { ColumnData } from '../../../core/utils/factories/column.factory';
import CreateColumnView from './CreateColumn.view';

interface OwnProps {}

interface ReduxDispatchProps {
  actions: {
    createColumn: (column: ColumnData) => void;
  }
}

interface Props extends OwnProps, ReduxDispatchProps {}

const CreateColumn: React.FC<Props> = ({ actions }): React.ReactElement => {
  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>): void => setInputValue(event.currentTarget.value);

  const createColumn = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return;

    actions.createColumn({
      title: event.currentTarget.value,
      tasks: [],
    });

    setInputValue('');
  };

  return (
    <CreateColumnView
      value={inputValue}
      events={{
        changeInputValue,
        createColumn,
      }}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  actions: {
    createColumn: (column) => dispatch(createColumn(column)),
  },
});

export default connect(null, mapDispatchToProps)(CreateColumn);
