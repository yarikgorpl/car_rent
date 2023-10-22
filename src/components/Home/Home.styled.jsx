import styled from 'styled-components';
import carImage from '../../assets/images/photos/bmw.jpg';

export const Background = styled.div`
  position: relative;
  background-image: url(${carImage});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
`;
export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 40px;
`;
export const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 140px;
`;
export const Span = styled.span`
  color: var(--btn-bg-color);
`;
