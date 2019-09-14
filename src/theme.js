import { css } from '@emotion/core';

export const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Raleway:500,700&display=swap');

  body {
    background: #f6f6f9;
  }
  body,
  html,
  #root {
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  * {
    box-sizing: border-box;
  }
`;

export default {
  fontFamilies: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Raleway, Montserrat, sans-serif',
  },
  fontSizes: {
    title: 23,
    subtitle: 20,
    normal: 15,
    caption: 14,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    primary: '#4E69A3',
    secondary: '#5085E8',
    sidebar: '#f2f2f5',
    background: '#f6f6f9',
    border: '#ebebeb',
    borderLight: '#d3d8e0',
    alert: '#e86250',
    black: '#454545',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
};
