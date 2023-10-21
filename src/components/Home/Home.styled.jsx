import styled from 'styled-components';
import carImage from '../../assets/images/photos/bmw.jpg';

export const CarImage = styled.img`
  width: 100%;
`;
export const Background = styled.div`
  background-image: url(${carImage});
  width: 100%;
  height: 100vh;
  background-size: cover;
`;
export const Title = styled.h1`
  color: #ffffff;
`;
export const Text = styled.p`
  color: #ffffff;
`;
