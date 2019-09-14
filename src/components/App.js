import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme, { globalStyle } from '../theme';
import Sidebar from './app/Sidebar';
import NewsPage from './app/NewsPage';
import Frame from './ui/Frame';
import Content from './ui/Content';
import UserToolbar from './app/UserToolbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Frame height="100%" display="flex">
        <Sidebar />
        <Content>
          <NewsPage />
        </Content>
        <UserToolbar />
      </Frame>
    </ThemeProvider>
  );
}

export default App;
