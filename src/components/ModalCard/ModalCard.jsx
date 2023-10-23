import { Button } from 'components/Buttons/Button/Button';
import {
  Card,
  CardTitle,
  CardImage,
  CardDescription,
  Model,
  ImageWrapper,
  CardDescriptionList,
  TitleDescription,
  CardDescriptionWrapper,
} from './ModalCard.styled';
export const ModalCard = (
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
  description,
  rentalConditions,
  mileage
) => {
  console.log(accessories);
  const Accesories = [...accessories];
  const Func = [...functionalities];
  const Option = [...Accesories, ...Func];

  const Condition = { rentalConditions }.split('/n');
  const Other = [...mileage, ...rentalPrice];
  const All = [...Condition, ...Other];
  return (
    <>
      <Card>
        <CardTitle>
          <ImageWrapper>
            <CardImage src={img} alt={make} />
          </ImageWrapper>

          <TitleDescription>
            <h1>
              {make}
              <Model> {model},</Model>
              {year}
            </h1>
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
        <p>{description}</p>
        <h2>Accessories and functionalities:</h2>
        <ul>
          {Option.map(opt => (
            <li>{opt}</li>
          ))}
        </ul>
        <h2>Rental Conditions:</h2>
        <ul>
          {All.map(cond => (
            <li>{cond}</li>
          ))}
        </ul>
      </Card>

      <Button> Rental car </Button>
    </>
  );
};
