import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 859px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
 margin-bottom:50px;

  }
`;
export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-right: 18px;
  &:nth-child(3) {
    margin-right: 0;
  }
`;
export const Label = styled.label`
  color: #8a8a89;
  &:nth-child(3) {
    color: transparent;
  }
`;
export const LabelTo = styled.label`
  color: transparent;
`;
export const Brand = styled.select`
  padding: 12px 18px;
  width: 224px;
  height: 48px;
  border-radius: 14px;
  border: none;
  background: #f7f7fb;
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

   
      }
`;
export const Price = styled.select`
  padding: 12px 18px;
  width: 125px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const From = styled.input`
  padding: 14px 93px 14px 24px;
  width: 160px;
  height: 48px;
  border: hidden;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const To = styled.input`
  padding: 14px 115px 14px 24px;
  width: 160px;
  height: 48px;
  border-radius: 0px 14px 14px 0px;
  border: none;
  background: #f7f7fb;
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const SearchBtn = styled.button`
  width: 136px;
  padding: 14px 44px;
  height: 48px;
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
