import sprite from '../../assets/images/icons/icons.svg';

import styled from 'styled-components';
export const Card = styled.div`
  width: 541px;
  height: 752px;
  padding: 15px 37px;
  display: flex;
  flex-direction: column;
`;
export const CardTitle = styled.div`
  color: var(--primary-text-color);

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background: #f3f3f2;
  object-fit: cover;
`;
export const CardDescription = styled.li`
  position: relative;
  font-size: 12px;
  color: var(--secondary-text-color);
  margin-bottom: 4px;
  &::after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 10px;
    height: 8px;
    stroke: #121417;
    stroke-opacity: 0.1;
    fill: red;
    stroke-width: 5px;
    background-size: contain;
    background-image: url({${sprite}#icon-4});
  }
`;
export const Model = styled.span`
  color: var(--btn-bg-color);
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
`;

export const TitleDescription = styled.p`
  display: flex;
  width: 274px;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const CardDescriptionList = styled.ul`
  display: flex;
  width: 274px;
  gap: 12px;
`;
export const CardDescriptionWrapper = styled.div`
  margin-bottom: 24px;
`;
