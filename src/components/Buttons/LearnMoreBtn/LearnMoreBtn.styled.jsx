import styled from 'styled-components';

export const LearnMoreEl = styled.button`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  margin: 0 auto;
  flex-shrink: 0;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  background-color: var(--btn-bg-color);
  justify-content: center;
  align-items: center;
  transform: translatez(0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--btn-bg-hover);
  }
  color: var(--btn-text-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
