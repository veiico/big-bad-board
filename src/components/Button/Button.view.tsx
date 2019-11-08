import React from 'react';
import { Container } from './Button.style';
import { Colors } from '../../containers/global/App/App.styles';

interface Props {
  className?: string;
  title: string;
  color?: Colors;
  onClick: (...args: any) => void;
}

const ButtonView: React.FC<Props> = ({ className, title, onClick, color }) => {
  return (
    <Container color={color || 'primary'} className={className} onClick={onClick}>
      {title}
    </Container>
  );
};

export default ButtonView;