import React from 'react';
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
import { ReactComponent as NewsPaper } from '../../assets/newspaper.svg';
import { ReactComponent as Pages } from '../../assets/pages.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Chat } from '../../assets/chat.svg';
import Frame from '../ui/Frame';
import Text from '../ui/Text';
import Icon from '../ui/Icon';
import NavItem from '../ui/NavItem';

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
      <NavItem active>
        <NewsPaperIcon />
        News
      </NavItem>
      <NavItem>
        <ChatIcon />
        Messages
      </NavItem>
      <NavItem>
        <UserIcon />
        Friends
      </NavItem>
      <NavItem>
        <PagesIcon />
        Pages
      </NavItem>
    </Frame>
  );
}

export default Sidebar;
