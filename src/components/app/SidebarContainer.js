import styled from '@emotion/styled';

const SidebarContainer = styled.nav(
  {
    position: 'fixed',
    width: 350,
    height: '100%',
    paddingLeft: 72,
    paddingTop: 50,
  },
  ({ theme }) => ({
    background: theme.colors.sidebar,
  }),
);

export default SidebarContainer;
