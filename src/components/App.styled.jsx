import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigate = styled.nav`
  position: absolute;
  display: flex;
  gap: 20px;
  top: 20px;
  right: 50px;
  z-index: 1;
  width: 200px;
`;
export const StyledLink = styled(NavLink)`
  color: var(--btn-bg-color);

  &.active {
    color: tomato;
  }
`;
