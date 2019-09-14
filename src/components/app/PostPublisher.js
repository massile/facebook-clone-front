import React from 'react';
import { ReactComponent as Picture } from '../../assets/picture.svg';
import { ReactComponent as Smiley } from '../../assets/smiley.svg';
import Panel from '../ui/Panel';
import Avatar from '../ui/Avatar';
import Icon from '../ui/Icon';
import TextInput from '../ui/TextInput';

const PictureIcon = Icon.withComponent(Picture);
const SmileyIcon = Icon.withComponent(Smiley);

function PostPublisher() {
  return (
    <Panel display="flex" alignItems="center" padding="0 25px" height={70} marginBottom={25} raised>
      <Avatar size="small" />
      <TextInput placeholder="What's on your mind" />
      <PictureIcon size={30} color="borderLight" marginRight={20} />
      <SmileyIcon size={30} color="borderLight" />
    </Panel>
  );
}

export default PostPublisher;
