import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { unregister } from './core'
import { Content, Title } from './components'
import { GlobalStyles, theme } from './styles-main'
import { ThemeProvider } from 'styled-components';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
     <Title>Sudoku</Title>
    </Content>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
unregister();
