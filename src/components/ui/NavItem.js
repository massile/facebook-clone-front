import styled from '@emotion/styled';
import Text from './Text';

const NavItem = styled(Text)(
  {
    height: 50,
    cursor: 'pointer',
    ':hover': {
      opacity: 1,
    },
  },
  ({ theme, active }) => ({
    fontWeight: theme.fontWeights[active ? 'bold' : 'medium'],
    opacity: active ? 1 : 0.7,
  }),
);

NavItem.defaultProps = {
  family: 'secondary',
};

export default NavItem;
