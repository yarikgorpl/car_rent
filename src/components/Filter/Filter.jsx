import {
  Wrapper,
  Form,
  InputWrapper,
  Label,
  LabelTo,
  Brand,
  Price,
  From,
  To,
  SearchBtn,
} from './Filter.styled';
export const Filter = () => {
  return (
    <Wrapper>
      <Form action="#">
        <InputWrapper>
          <Label for="brand">Car brand</Label>
          <Brand name="brand" id="brand">
            <option value="javascript">Enter the text</option>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
          </Brand>
        </InputWrapper>
        <InputWrapper>
          <Label for="price">Price/1 hour</Label>
          <Price name="price" id="price" placeholder="To $">
            <option value="javascript">10$</option>
            <option value="php">20$</option>
          </Price>
        </InputWrapper>
        <InputWrapper>
          <Label for="from"> Сar mileage / km</Label>
          <From name="from" placeholder="From" />
        </InputWrapper>
        <InputWrapper>
          <LabelTo for="to">44444 </LabelTo>
          <To name="to" placeholder="To" />
        </InputWrapper>
        <SearchBtn type="submit"> Searh</SearchBtn>
      </Form>
    </Wrapper>
  );
};
