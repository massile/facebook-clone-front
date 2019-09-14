import styled from '@emotion/styled';

const Text = styled.p(
  {
    margin: 0,
  },
  ({
    theme,
    family = 'primary',
    size = 'normal',
    weight = 'regular',
    color = 'black',
    children,
    ...props
  }) => ({
    ...props,
    fontFamily: theme.fontFamilies[family],
    fontSize: theme.fontSizes[size],
    fontWeight: theme.fontWeights[weight],
    color: theme.colors[color],
  }),
);

/**
 * @component
 */
export default Text;
