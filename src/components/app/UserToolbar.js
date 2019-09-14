import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../ui/Avatar';
import Frame from '../ui/Frame';
import Text from '../ui/Text';

const ToolbarContainer = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 75,
    position: 'fixed',
    padding: '0 75px',
    bottom: 0,
  },
  () => ({
    background: 'rgba(60,90,153,.9)',
  }),
);

function UserToolbar() {
  return (
    <ToolbarContainer>
      <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
      <Frame marginLeft={25}>
        <Text color="white" weight="semibold" size="subtitle">
          Sergey Brin
        </Text>
        <Text color="white" size="caption" marginTop={5} opacity={0.44}>
          It's you
        </Text>
      </Frame>
    </ToolbarContainer>
  );
}

export default UserToolbar;
