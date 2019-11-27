import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueFilter = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    margin-right: 20px;
    font-size: 16px;
    background: 0;
    padding: 10px;
    color: #7159c1;
    opacity: 0.35;
    border: 0;
    text-align: center;
    border-radius: 4px;
    transition: opacity 0.5s ease-out;

    div {
      margin-top: 6px;
      height: 3px;
      width: 80px;
    }

    &:nth-child(${props => props.active + 1}) {
      color: ${props => (props.active + 1 ? '#7159c1' : 'default')};
      opacity: 1;
      div {
        background-color: #7159c1;
      }
    }
  }
`;

export const IssueList = styled.ul`
  padding-top: 10px;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 15px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600px;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 1s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    background-color: #7159c1;
    color: white;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
      background-color: #ddd;
    }
  }
`;
