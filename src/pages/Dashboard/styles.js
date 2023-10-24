import { Card, Form } from "react-bootstrap";
import styled from "styled-components";

export const CustomCard = styled(Card)`
  width: 95%;
  margin: 25px auto;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const FormGroup = styled(Form.Group)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > input.form-control {
    height: 60px;
    font-size: 25px;
    border: 1px solid purple;

    @media (min-width: 768px) {
      font-size: 18px;
      height: 40px;
    }
  }

  > button.btn.btn-primary {
    height: 60px;
    width: 60px;
    background-color: transparent;
    color: purple;
    border: 2.5px solid purple;

    @media (min-width: 768px) {
      height: 40px;
      width: 40px;
      padding: 3px;
    }
  }
`;

export const TDbtn = styled.td`
  > button.btn.btn-primary {
    background-color: #4f495712;
    color: purple;
    border: none;
    border-radius: 5px;
    padding: 0px;
    height: 22px;
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TDcheck = styled.td`
  > div {
    width: 20px;
    height: 20px;
    > input.form-check-input {
      width: 20px;
      height: 20px;
      margin: 0px;
    }
  }
  > div > input.form-check-input:checked {
    background-color: purple;
    border-color: purple;
    box-shadow: 0 0 0 0.25rem rgba(128, 0, 128, 0.25);
  }
`;

export const TDstring = styled.td`
  min-width: 100px;
  max-width: 120px;
  overflow: scroll;
  white-space: nowrap;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

export const TDchars = styled.td`
  min-width: 100px;
  max-width: 190px;
  overflow: scroll;
  white-space: nowrap;
  > .letter {
    font-weight: 500;
    color: lightgray;
  }

  > .separator > svg {
    transform: rotate(52deg);
    color: purple;
  }

  @media (min-width: 768px) {
    max-width: 320px;
  }
`;
