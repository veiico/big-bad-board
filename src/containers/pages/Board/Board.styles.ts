import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
`;

export const Column = styled.div`
  flex: 0 0 400px;
  height: 100%;
  padding-right: 30px;
  
  &:last-child {
    padding-right: 50px;
  }
`;