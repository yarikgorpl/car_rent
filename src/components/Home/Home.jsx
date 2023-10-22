import React from 'react';
import { Background, Wrapper, Title, Text, Span } from './Home.styled';

import { Button } from '../Buttons/Button/Button';
export const Home = () => {
  return (
    <Background>
      <Wrapper>
        <Title>
          Find, book, or rent a car <br />
          <Span>quickly and easily!</Span>
        </Title>

        <Text>
          Streamline your car rental with our effortless booking process.
        </Text>

        <Button>Choose your car</Button>
      </Wrapper>
    </Background>
  );
};
