import React from 'react';
import { Background, Title, Text } from './Home.styled';

import { CustomButton } from '../Buttons/CustomButton/CustomButton';
export const Home = () => {
  const handleScroll = () => {};

  return (
    <Background>
      <div>
        <Title>
          Find, book, or rent a car
          <span>quickly and easily!</span>
        </Title>

        <Text>
          Streamline your car rental exTexterince with our effortless booking
          process.
        </Text>

        <CustomButton handleClick={handleScroll} />
      </div>
      <div></div>
    </Background>
  );
};
