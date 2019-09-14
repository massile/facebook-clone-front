import React from 'react';
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
import { ReactComponent as NewsPaper } from '../../assets/newspaper.svg';
import { ReactComponent as Pages } from '../../assets/pages.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Chat } from '../../assets/chat.svg';
import Frame from '../ui/Frame';
import Text from '../ui/Text';
import Icon from '../ui/Icon';

const NewsPaperIcon = Icon.withComponent(NewsPaper);
const PagesIcon = Icon.withComponent(Pages);
const UserIcon = Icon.withComponent(User);
const ChatIcon = Icon.withComponent(Chat);

function Sidebar() {
  return (
    <Frame width={350} height="100%" background="sidebar" paddingLeft={72} paddingTop={50}>
      <FacebookLogo width={50} height={50} />
      <Text family="secondary" weight="bold" marginBottom={40} marginTop={55}>
        Menu
      </Text>
      <Text family="secondary" marginBottom={30} weight="bold">
        <NewsPaperIcon />
        News
      </Text>
      <Text family="secondary" marginBottom={30} weight="medium">
        <ChatIcon />
        Messages
      </Text>
      <Text family="secondary" marginBottom={30} weight="medium">
        <UserIcon />
        Friends
      </Text>
      <Text family="secondary" marginBottom={30} weight="medium">
        <PagesIcon />
        Pages
      </Text>
    </Frame>
  );
}

export default Sidebar;
