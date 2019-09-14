import React from 'react';
import TabList from '../ui/TabList';
import Tab from '../ui/Tab';
import Frame from '../ui/Frame';

function NewsPage() {
  return (
    <Frame marginLeft={40} marginRight={70} paddingTop={55} flex={1}>
      <TabList>
        <Tab active>Posts</Tab>
        <Tab>Photos</Tab>
        <Tab>Video</Tab>
      </TabList>
    </Frame>
  );
}

export default NewsPage;
