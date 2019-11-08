import styled from 'styled-components';
import { Colors, theme } from '../../containers/global/App/App.styles';

interface Container {
  color: Colors;
}

export const Container = styled.div<Container>`
  display: block;
  background-color: ${({ color }) => theme.colors[color]};
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;