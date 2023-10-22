import { LearnMore } from '../Buttons/LearnMoreBtn/LearnMoreBtn';
import {
  Card,
  CardTitle,
  CardImage,
  CardDescription,
  Model,
  ImageWrapper,
} from './CatalogItem.styled';
export const ListItem = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  accessories,
  type,
  id,
  functionalities,
}) => {
  return (
    <Card>
      <CardTitle>
        <ImageWrapper>
          <CardImage src={img} alt={make} />
        </ImageWrapper>

        <p>
          {make}
          <Model> {model},</Model>
          {year} <span>{rentalPrice}</span>
        </p>
      </CardTitle>

      <ul>
        <CardDescription>{address.split(',').slice(1, 2)}</CardDescription>
        <CardDescription>{address.split(',').slice(2, 3)}</CardDescription>
        <CardDescription>{rentalCompany}</CardDescription>
        <CardDescription>
          {accessories[0].split(' ').slice(0, 3).join(' ')}
        </CardDescription>
      </ul>
      <ul>
        <CardDescription>{type}</CardDescription>
        <CardDescription>{model}</CardDescription>
        <CardDescription>{id}</CardDescription>
        <CardDescription>
          {functionalities[0].split(' ').slice(0, 3).join(' ')}
        </CardDescription>
      </ul>
      <LearnMore />
    </Card>
  );
};
