import React from 'react';
import Frame from '../../ui/Frame';
import Panel from '../../ui/Panel';

function PostsTab() {
  return (
    <Frame display="flex" marginTop={30}>
      <Frame width={1025} marginRight={25}>
        <Panel height={80} marginBottom={25} raised />
        <Panel height={300} marginBottom={25} />
        <Panel height={300} marginBottom={25} />
        <Panel height={300} />
      </Frame>
      <Frame width="calc(100% - 1050px)">
        <Panel height={800} />
      </Frame>
    </Frame>
  );
}

export default PostsTab;
