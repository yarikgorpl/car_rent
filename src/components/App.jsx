import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { lazy, Suspense } from 'react';

import { HomePage } from '../pages/HomePage';

import { CatalogPage } from '../pages/CatalogPage';
import { FavoritePage } from '../pages/FavoritePage';
import { NotFoundPage } from '../pages/NotFoundPage';
const StyledLink = styled(NavLink)`
  color: #cccccc;

  &.active {
    color: orange;
  }
`;

// const Home = lazy(() => import('./Home/Home'));

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorite</StyledLink>
      </nav>
      {/* <Suspense fallback={null}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
};
