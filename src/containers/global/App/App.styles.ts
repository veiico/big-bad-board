import styled, { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'text'
  | 'textDim'
  | 'background'
  | 'backgroundDark'
;

interface Theme {
  colors: {
    [color in Colors]: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#6d84ee',
    secondary: '#313a4b',
    danger: '#dc769b',
    success: '#88c2af',
    text: '#343945',
    textDim: '#c5c6ce',
    background: '#f5f6fc',
    backgroundDark: '#f0f1fa',
  }
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  body {
    font-family: 'Work Sans', sans-serif;
    color: ${theme.colors.text};
  }

  * {
    box-sizing: border-box;
  }
  
  input,
  textarea {
    background: none;
    border: none;
    outline: none;
    resize: none;
    
    &::placeholder {
      color: ${theme.colors.textDim};
    }
  }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background};
`;

export const Content = styled.div`
  flex: 1;
  height: calc(100% - 70px);
`;