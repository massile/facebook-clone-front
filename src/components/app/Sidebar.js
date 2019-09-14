import React from 'react';
import Frame from '../ui/Frame';
import Text from '../ui/Text';

function Sidebar() {
  return (
    <Frame width={350} height="100%" background="sidebar" paddingLeft={72} paddingTop={50}>
      <Text family="secondary" weight="bold" marginBottom={40} marginTop={105}>
        Menu
      </Text>
      <Text family="secondary" marginBottom={35} weight="bold">
        News
      </Text>
      <Text family="secondary" marginBottom={35} weight="medium">
        Messages
      </Text>
      <Text family="secondary" marginBottom={35} weight="medium">
        Friends
      </Text>
      <Text family="secondary" marginBottom={35} weight="medium">
        Pages
      </Text>
    </Frame>
  );
}

export default Sidebar;
