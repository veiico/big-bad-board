import styled from 'styled-components';
import { theme } from '../../../containers/global/App/App.styles';

export const Container = styled.div`
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
