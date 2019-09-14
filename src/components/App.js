import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import Text from './ui/Text';
import theme, { globalStyle } from '../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Text>Test</Text>
    </ThemeProvider>
  );
}

export default App;
