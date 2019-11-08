import React, { ChangeEvent, KeyboardEvent, MouseEvent, Ref } from 'react';
import { Container, Divider, Title } from './Card.style';

interface Props {
  inputValue: string;
  inputRef?: Ref<HTMLInputElement>;
  events: {
    editTitle: (event: KeyboardEvent<HTMLInputElement>) => void;
    clickContainer?: () => void;
    preventOtherClickEffects?: (event: MouseEvent) => void;
    changeInputValue?: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}

const CardView: React.FC<Props> = ({ events, inputRef, inputValue }) => (
  <Container onClick={events.clickContainer}>
    <Title
      ref={inputRef}
      value={inputValue}
      onClick={events.preventOtherClickEffects}
      onChange={events.changeInputValue}
      onKeyDown={events.editTitle}
    />
    <Divider />
  </Container>
);

export default CardView;