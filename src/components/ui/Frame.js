import styled from '@emotion/styled';

const Frame = styled.div({}, ({ theme, children, background = 'transparent', ...props }) => ({
  ...props,
  background: theme.colors[background] || background,
}));

/**
 * @component
 */
export default Frame;
