import styled from 'styled-components';

export const PopupLayout = styled.div`
  width: 370px;
  height: 270px;
  background: #fff;
  position: fixed;
  top: 20%;
  left: 50%;
  z-index: 200;
  margin: 0 0 0 -187.5px;
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  overflow: auto;
`;

export const PopupSection = styled.section`
  margin: 15px 0;
`;

export const PopupBackdropLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

export const WellcomeTitle = styled.h2`
  color: white;
  background-color: #120e3d;
  text-align: center;
  padding: 25px 0;
`;

export const Message = styled.p`
  font-size: 12pt;
  margin-bottom: 10px;
`;
