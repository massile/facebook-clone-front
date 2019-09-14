import styled from '@emotion/styled';

const Text = styled.p({}, ({ theme, size = 'normal', weight = 'regular', color = 'black' }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSizes[size],
  fontWeight: theme.fontWeights[weight],
  color: theme.colors[color],
}));

/**
 * @component
 */
export default Text;
