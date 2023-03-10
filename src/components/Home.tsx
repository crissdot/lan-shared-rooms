import React from 'react';
import styled from 'styled-components';
import { ChatRoom } from './Room/ChatRoom';
import { Main } from './StyledComponents/Main';

const Title = styled.h1`
  padding-top: 2rem;
  font-size: 2rem;
  text-align: center;
`;

const Home = () => {
  return (
    <Main>
      <>
        <Title>LAN SHARED ROOMS</Title>
        <ChatRoom/>
      </>
    </Main>
  );
}

export { Home };
