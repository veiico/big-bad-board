import styled from 'styled-components';
import { theme } from '../../containers/global/App/App.styles';

export const Container = styled.div`
  padding: 25px 15px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
`;

export const Title = styled.input`
  width: 100%;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export const Divider = styled.div`
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  border-radius: 1000px;
  margin-top: 10px;
  background-color: ${theme.colors.primary};
`;