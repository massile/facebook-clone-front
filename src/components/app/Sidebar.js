import React from 'react';
import Frame from '../ui/Frame';
import Text from '../ui/Text';

function Sidebar() {
  return (
    <Frame width={260} height="100%" background="sidebar" paddingLeft={35} paddingTop={30}>
      <Text weight="semibold" marginBottom={37} marginTop={85}>
        Menu
      </Text>
      <Text marginBottom={20} weight="semibold">
        News
      </Text>
      <Text marginBottom={20}>Messages</Text>
      <Text marginBottom={20}>Friends</Text>
      <Text marginBottom={20}>Pages</Text>
    </Frame>
  );
}

export default Sidebar;
