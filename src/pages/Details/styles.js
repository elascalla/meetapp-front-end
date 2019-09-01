import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 32px;
    }
  }

  img {
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    margin-top: 50px;
  }

  span {
    margin-top: 25px;
    color: #fff;
    font-size: 18px;
  }

  footer {
    color: #fff;
    opacity: 0.6;
    font-size: 16px;
    margin: 20px 20px;
    display: flex;
    justify-content: flex-end;

    > div {
      display: flex;
      align-items: center;
      margin-right: 5px;

      time {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 5px;
      }

      address {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 5px;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  margin: 20px 0 auto;
  height: 44px;
  background: ${props => (props.secondary ? '#4dbaf9' : '#d44059')};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  padding: 0 25px;

  &:hover {
    background: ${props =>
      darken(0.08, props.secondary ? '#4dbaf9' : '#d44059')};
  }

  &:last-of-type {
    margin-left: 15px;
  }
`;
