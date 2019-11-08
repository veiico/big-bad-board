import React, { ChangeEvent, KeyboardEvent } from 'react';
import { Container, Input } from './CreateColumn.style';

interface OwnProps {
  value: string;
  events: {
    changeInputValue: (event: ChangeEvent<HTMLInputElement>) => void,
    createColumn: (event: KeyboardEvent<HTMLInputElement>) => void,
  }
}

const CreateColumnView: React.FC<OwnProps> = ({ value, events }): React.ReactElement => (
  <Container>
    <Input
      value={value}
      onChange={events.changeInputValue}
      placeholder="Create column"
      onKeyDown={events.createColumn}
    />
  </Container>
);

export default CreateColumnView;
