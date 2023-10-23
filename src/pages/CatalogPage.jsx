import React from 'react';
import { Catalog } from 'components/Catalog/Catalog';
import { MainContainer } from 'components/MainContainer/MainContainer';
import advertsCars from '../data/advertsCars.json';
// import Modal from 'components/Modal/Modal';

export const CatalogPage = () => {
  return (
    <MainContainer>
      <Catalog advertsCars={advertsCars} />
      {/* <Modal> */}
      {/* <ModalCard advertsCars={advertsCars} /> */}
      {/* </Modal> */}
    </MainContainer>
  );
};
