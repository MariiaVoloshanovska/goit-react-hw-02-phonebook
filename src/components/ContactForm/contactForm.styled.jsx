import styled from 'styled-components';

const FormContact = styled.form``;
const LabelContact = styled.label``;
const InputContact = styled.input`
  margin-right: 10px;
`;
const FormBtn = styled.button`
  border-radius: 5px;
  transition: background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  font-size: 15px;
    font-weight: 500;
    color: rgba(51, 51, 51, 0.8);
    margin-top: 30px;
    padding: 4px;
    border: none;
    box-shadow: 0 0 2px #333;
    cursor: pointer;
    background-color: rgba(178, 146, 171, 0.742);
    border-radius: 5px;
    transition-duration: 400ms;
  &:hover {
    cursor: pointer;
    background-color: #BC8F8F;
    
  }
`;

export { FormContact, LabelContact, InputContact, FormBtn };