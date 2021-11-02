import styled from 'styled-components';

export const CardLayout = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  border: 1px grey solid;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 5px;
  background: #f8f8ff;
  max-width: 250px;

  &:hover {
    box-shadow: 5px 3px 3px grey;
    font-weight: 500;
  }
`;

export const CardInfo = styled.div`
  width: 85%;
  cursor: pointer;
  word-wrap: break-word;
`;

export const DeleteBtn = styled.div`
  width: 15%;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  color: #fff;
  background: #fcc7c3;
  border: 0;
  border-radius: 5px;

  &:hover {
    background: #f66257;
  }
`;
