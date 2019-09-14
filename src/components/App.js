import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme, { globalStyle } from '../theme';
import Sidebar from './app/Sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
