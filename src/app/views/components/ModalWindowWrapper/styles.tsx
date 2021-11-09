import styled from 'styled-components';

export const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
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

export const ModalSection = styled.section`
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  color: white;
  background-color: #120e3d;
  text-align: center;
  padding: 25px 0;
`;
