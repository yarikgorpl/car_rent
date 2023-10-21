import styled from 'styled-components';

export const RentalCarButton = styled.button`
  display: block;
  height: 100%;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  margin-left: auto;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  transition: ba §ckground-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--btn-bg-hover);
  }
`;
