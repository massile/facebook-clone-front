import React from 'react';
import TabList from '../ui/TabList';
import Tab from '../ui/Tab';
import PostsTab from './tabs/PostsTab';

function NewsPage() {
  return (
    <>
      <TabList>
        <Tab active>Posts</Tab>
        <Tab>Photos</Tab>
        <Tab>Video</Tab>
      </TabList>
      <PostsTab />
    </>
  );
}

export default NewsPage;
