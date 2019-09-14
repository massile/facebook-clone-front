import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  marginLeft: 40,
  marginRight: 70,
  paddingTop: 55,
  flex: 1,
});

const Blank = styled.div({
  width: '20%',
  flexShrink: 0,
  maxWidth: 350,
  minWidth: 200,
});

function Content({ children }) {
  return (
    <>
      <Blank />
      <Container>{children}</Container>
    </>
  );
}

export default Content;
