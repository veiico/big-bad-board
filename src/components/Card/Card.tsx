import React, { ChangeEvent, KeyboardEvent, MutableRefObject, MouseEvent, useEffect, useRef, useState } from 'react';
import CardView from './Card.view';

interface Props {
  title: string;
  focusOnLoad?: boolean;
  events: {
    editTitle: (event: KeyboardEvent<HTMLInputElement>) => void;
    clickContainer?: () => void;
  }
}

const Card: React.FC<Props> = ({ title, focusOnLoad, events: { editTitle, clickContainer } }) => {
  const [inputValue, setInputValue] = useState(title);
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    if (focusOnLoad && inputRef.current) {
      inputRef.current.focus();
    }
  });

  const preventOtherClickEffects = (event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <CardView
      inputRef={inputRef}
      inputValue={inputValue}
      events={{
        preventOtherClickEffects,
        changeInputValue,
        clickContainer,
        editTitle,
      }}
    />
  );
};

export default Card;