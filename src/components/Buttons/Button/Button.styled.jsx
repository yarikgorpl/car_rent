import styled from 'styled-components';

export const Buttons = styled.button`
  width: 274px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: var(--btn-bg-hover);
  }
`;
