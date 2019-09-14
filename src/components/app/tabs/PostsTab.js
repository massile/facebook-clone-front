import React from 'react';
import Frame from '../../ui/Frame';
import Panel from '../../ui/Panel';
import PostPublisher from '../PostPublisher';

function PostsTab() {
  return (
    <Frame display="flex" marginTop={30}>
      <Frame width={`${200 / 3}%`} marginRight={25}>
        <PostPublisher />
        <Panel height={300} marginBottom={25} />
        <Panel height={300} marginBottom={25} />
        <Panel height={300} />
      </Frame>
      <Frame width={`${100 / 3}%`}>
        <Panel height={800} />
      </Frame>
    </Frame>
  );
}

export default PostsTab;
