import { css } from '@emotion/core';

export const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
`;

export default {
  fontFamily: 'Montserrat, sans-serif',
  fontSizes: {
    title: 24,
    subtitle: 20,
    normal: 16,
    caption: 14,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  colors: {
    primary: '#4E69A3',
    secondary: '#5085E8',
    border: '#ebebeb',
    borderLight: '#d3d8e0',
    alert: '#e86250',
    black: '#454545',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
};
