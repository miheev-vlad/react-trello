import styled from 'styled-components';

export const ModalLayout = styled.div`
  display: flex;
  width: 370px;
  height: 370px;
  background: #fff;
  position: fixed;
  top: 20%;
  left: 50%;
  z-index: 200;
  margin: 0 0 0 -187.5px;
`;

export const ModalContainer = styled.div`
  display: block;
  padding: 10px;
  overflow: auto;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  &:hover {
    opacity: 0.6;
  }
  margin-left: 310px;
`;

export const CardTitle = styled.input`
  padding: 5px 5px 5px 0;
  border: 0;
  font-size: 1.1rem;
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 1px;
`;

export const CommentInput = styled.input`
  padding: 5px;
  margin-right: 5px;
`;

export const CommentAddButton = styled.button`
  padding: 5px;
  cursor: pointer;
`;

export const ModalSection = styled.section`
  margin-bottom: 15px;
`;

export const CardInfo = styled.section`
  p {
    margin-bottom: 10px;
  }
  button {
    padding: 5px;
    cursor: pointer;
    color: #fff;
    background: #fcc7c3;
    border: 0;
    border-radius: 5px;
    &:hover {
      background: #f66257;
    }
  }
`;
