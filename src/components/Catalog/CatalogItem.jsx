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
  CardDescriptionList,
  TitleDescription,
  CardDescriptionWrapper,
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
  type,
  id,
  functionalities,
}) => {
  return (
    <>
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
            <div>
              {make.slice(0, 15)}
              <Model> {model.slice(0, 8)},</Model>
              {year}
            </div>
            <span>{rentalPrice}</span>
          </TitleDescription>
        </CardTitle>
        <CardDescriptionWrapper>
          <CardDescriptionList>
            <CardDescription>{address.split(',').slice(1, 2)}</CardDescription>
            <CardDescription>{address.split(',').slice(2, 3)}</CardDescription>
            <CardDescription>{rentalCompany}</CardDescription>
          </CardDescriptionList>
          <CardDescriptionList>
            <CardDescription>{type}</CardDescription>
            <CardDescription>{model.slice(0, 12)}</CardDescription>
            <CardDescription>{id}</CardDescription>
            <CardDescription>
              {functionalities[2].split(' ').slice(0, 1).join(' ')}
            </CardDescription>
          </CardDescriptionList>
        </CardDescriptionWrapper>
        <LearnMore />
      </Card>
    </>
  );
};
