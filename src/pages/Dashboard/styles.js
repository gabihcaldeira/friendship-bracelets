import { Card, Form } from "react-bootstrap";
import styled from "styled-components";
export const CustomCard = styled(Card)`
  width: 95%;
  margin: 25px auto;
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
  }

  > button.btn.btn-primary {
    height: 60px;
    width: 60px;
    background-color: transparent;
    color: purple;
    border: 2.5px solid purple;
  }
`;
