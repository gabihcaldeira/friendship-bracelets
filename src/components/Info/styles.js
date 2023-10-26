import styled from "styled-components";

export const ContainerInfo = styled.div`
  > p {
    padding: 0px 5px;
    margin: 5px 0px 0px;
    font-size: 13px;
    color: purple;
    text-align: justify;
    line-height: 12px;

    @media (min-width: 500px) {
      text-align: center;
    }
  }

  .btn.btn-light {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

    background-color: transparent;
    border: none;
    box-shadow: none;
    color: lightgray;

    > p {
      font-size: 12px;
      font-weight: 500;
      margin: 0;
    }

    &:hover,
    &:active,
    &:focus-visible {
      background-color: transparent;
      border: none;
      box-shadow: none;
      color: lightgray;
    }
  }

  > div.info {
    width: 90%;
    max-height: 130px;
    overflow-y: scroll;
    border: 1.5px solid lightgray;
    border-radius: 5px;
    padding: 6px;
    margin: 0px auto 10px;

    > p {
      margin: 0px;
      font-size: 13px;
      text-align: justify;
      color: #8b8b8b;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
