import styled from '@emotion/styled';

const Panel = styled.div(
  {
    borderRadius: 10,
  },
  ({ theme, children, raised, ...props }) => ({
    ...props,
    boxShadow: raised ? '0px 3px 1px rgba(211,216,224,0.4)' : 'inherit',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.border}`,
  }),
);

/**
 * @component
 */
export default Panel;
