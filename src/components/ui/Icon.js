import styled from '@emotion/styled';

const Icon = styled.svg({}, ({ theme, color = 'black', size = 17, ...props }) => ({
  ...props,
  fill: theme.colors[color],
  width: size,
  height: size,
}));

/**
 * @component
 */
export default Icon;
