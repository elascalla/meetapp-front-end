import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    img {
      height: 300px;
      object-fit: cover;
      border-radius: 4px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;
      height: 200px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    div#save > button {
      align-self: flex-end;
      margin: 20px 0 auto;
      height: 44px;
      background: #d44059;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 0 25px;

      &:hover {
        background: ${darken(0.08, '#d44059')};
      }
    }

    .react-datepicker-wrapper > div {
      display: inline;
      > input {
        width: 100%;
      }
    }
  }

  span {
    color: #d44059;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;
