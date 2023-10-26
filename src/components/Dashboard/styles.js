import { Button, Card, Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";

export const CustomCard = styled(Card)`
  width: 100%;

  > .card-body {
    padding: 8px 5px !important;
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const FormGroup = styled(Form.Group)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > input.form-control {
    height: 35px;
    font-size: 18px;
    border: 1px solid purple;

    @media (min-width: 768px) {
      font-size: 20px;
      height: 45px;
    }
  }

  > button.btn.btn-primary {
    height: 35px;
    width: 35px;
    padding: 0px 6.5px;
    background-color: transparent;
    color: purple;
    border: 2.5px solid purple;

    @media (min-width: 768px) {
      height: 45px;
      width: 45px;
      padding: 0px 9.5px;
    }

    &:hover,
    &:active,
    &:focus-visible {
      color: white;
    }

    > svg {
      height: 18px;
      width: 18px;

      @media (min-width: 768px) {
        height: 22px;
        width: 22px;
      }
    }
  }
`;

export const TBody = styled.tbody`
  > tr > td {
    display: flex;
    height: 50px;
    align-items: center;
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
  width: 40%;
  > div {
    max-width: 126px;
    overflow: hidden !important;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
  }

  @media (min-width: 425px) {
    width: 45%;
    > div {
      max-width: 170px;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    > div {
      max-width: 300px;
    }
  }
`;

export const TDchars = styled.td`
  width: 40%;
  max-width: 126px;
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

  @media (min-width: 425px) {
    width: 45%;
    max-width: 170px;
  }
  @media (min-width: 768px) {
    width: 50%;
    max-width: 300px;
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 1px;
  }
`;

export const ListGroupItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 5px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const BtnFooter = styled(Button)`
  width: 85px;
  padding: 8px;
  font-weight: 700 !important;
`;

export const TotalBody = styled.tbody`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  > tr {
    padding: 5px;
    border: 2px solid lightgray;
    border-radius: 5px;

    > td {
      font-size: 20px;
      font-weight: 700;
      color: purple;
    }
  }
`;
