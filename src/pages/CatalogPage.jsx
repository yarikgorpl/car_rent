import React from 'react';
import { Catalog } from 'components/Catalog/Catalog';
import { MainContainer } from 'components/MainContainer/MainContainer';
import advertsCars from '../data/advertsCars.json';

export const CatalogPage = () => {
  return (
    <MainContainer>
      <Catalog advertsCars={advertsCars} />
    </MainContainer>
  );
};
