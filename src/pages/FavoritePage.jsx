import React from 'react';
import { ModalCard } from 'components/ModalCard/ModalCard';
import advertsCars from '../data/advertsCars.json';

import { Favorite } from 'components/Favorite/Favorite';
import { MainContainer } from 'components/MainContainer/MainContainer';
export const FavoritePage = () => {
  console.log(advertsCars);
  return (
    <MainContainer>
      <Favorite>
        <ModalCard advertsCars={advertsCars} />
      </Favorite>
    </MainContainer>
  );
};
