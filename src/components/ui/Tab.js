import styled from '@emotion/styled';

const Tab = styled.li(
  {
    position: 'relative',
    padding: 0,
    margin: 0,
    marginRight: 50,
    listStyleType: 'none',
    cursor: 'pointer',
    ':after': {
      content: '""',
      transition: 'transform 250ms',
      left: 0,
      top: 39,
      height: 2,
      width: '100%',
      transform: 'scale(0)',
      position: 'absolute',
    },
    ':hover': {
      ':after': {
        transform: 'scale(1)',
      },
    },
  },
  ({ theme, active }) => ({
    fontFamily: theme.fontFamilies.primary,
    fontWeight: theme.fontWeights[active ? 'medium' : 'regular'],
    color: theme.colors.black,
    opacity: active ? 1 : 0.5,
    ':after': {
      background: theme.colors.secondary,
      transform: `scale(${active ? 1 : 0})`,
    },
  }),
);

/**
 * @component
 */
export default Tab;
