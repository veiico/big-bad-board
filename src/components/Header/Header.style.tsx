import styled from 'styled-components';
import { theme } from '../../containers/global/App/App.styles';

export const Container = styled.header`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: white;
  font-weight: bold;
`;