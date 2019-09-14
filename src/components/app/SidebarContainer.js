import styled from '@emotion/styled';

const SidebarContainer = styled.nav(
  {
    position: 'fixed',
    width: '20%',
    maxWidth: 350,
    minWidth: 200,
    height: '100%',
    paddingLeft: '3%',
    paddingTop: 50,
  },
  ({ theme }) => ({
    background: theme.colors.sidebar,
  }),
);

export default SidebarContainer;
