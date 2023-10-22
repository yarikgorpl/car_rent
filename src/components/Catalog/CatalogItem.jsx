import { LearnMore } from '../Buttons/LearnMoreBtn/LearnMoreBtn';
import {
  Card,
  CardTitle,
  CardImage,
  CardDescription,
  Model,
  ImageWrapper,
  SVG,
  Favorite,
  TitleDescription,
} from './CatalogItem.styled';
import sprite from '../../assets/images/icons/icons.svg';
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
          <Favorite>
            <SVG>
              <use href={`${sprite}#icon-heart`}></use>
            </SVG>
          </Favorite>

          <CardImage src={img} alt={make} />
        </ImageWrapper>

        <TitleDescription>
          {make.slice(0, 10)}
          <Model> {model.slice(0, 8)},</Model>
          {year} <span>{rentalPrice}</span>
        </TitleDescription>
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
