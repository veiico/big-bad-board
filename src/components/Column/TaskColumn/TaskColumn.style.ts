import styled from 'styled-components';
import { theme } from '../../../containers/global/App/App.styles';
import ButtonView from '../../Button/Button.view';

export const Container = styled.div`
  height: 100%;
  background-color: ${theme.colors.backgroundDark};
  padding: 20px 0 0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0 0 20px 30px;
  width: 100%;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export const Cards = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const CardWrapper = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const CreateTask = styled(ButtonView)`
  margin: 0 auto 15px;
  display: block;
  width: 150px;
`;
