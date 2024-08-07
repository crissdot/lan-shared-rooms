import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { io } from "socket.io-client";
import { postService } from '../../services/postService';
import { IFetchedPost } from '../../types/IPost';
import { ChatInput } from './ChatInput';
import { config } from '../../config';
import { ChatMessage } from './ChatMessage';

const ChatRoomContainer = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 30px auto 0;
  border: 2px solid ${props => props.theme.colors.alternative};
  border-radius: 1rem;
`;

const ChatMessageListContainer = styled.ul`
  height: 50vh;
  overflow-y: scroll;
  list-style: none;
`;

const socket = io(config.backendDomain, {
  path: config.socketEndpoint
});

const ChatRoom = () => {
  const [fetchedPosts, setFetchedPosts] = useState<IFetchedPost[]>([]);

  useEffect(() => {
    fetchPosts();

    socket.on('new_post', () => {
      fetchPosts();
    });

    return () => {
      socket.off('new_post');
    };
  }, []);

  const fetchPosts = useCallback(async () => {
    const posts = await postService.get();
    setFetchedPosts(posts);
  }, []);

  return (
    <ChatRoomContainer>
      <ChatInput />
      <ChatMessageListContainer>
        {fetchedPosts.map(post => <ChatMessage post={post} key={post.id} />)}
      </ChatMessageListContainer>
    </ChatRoomContainer>
  );
}

export { ChatRoom };
