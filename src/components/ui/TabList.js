import styled from '@emotion/styled';

const TabList = styled.ul(
  {
    display: 'flex',
    width: '100%',
    margin: 0,
    padding: 0,
    paddingBottom: 20,
  },
  ({ theme }) => ({
    borderBottom: `2px solid ${theme.colors.border}`,
  }),
);

/**
 * @component
 */
export default TabList;
