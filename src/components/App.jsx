import { Routes, Route } from 'react-router-dom';

// import { lazy, Suspense } from 'react';

import { HomePage } from '../pages/HomePage';

import { CatalogPage } from '../pages/CatalogPage';
import { FavoritePage } from '../pages/FavoritePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { StyledLink, Navigate } from './App.styled';
// const Home = lazy(() => import('./Home/Home'));

export const App = () => {
  return (
    <>
      <Navigate>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorite</StyledLink>
      </Navigate>
      {/* <Suspense fallback={null}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
};
