import styled from 'styled-components';

export const CardTitle = styled.input`
  padding: 5px 5px 5px 0;
  border: 0;
  font-size: 1.1rem;
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 1px;
`;

export const CardSection = styled.section`
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
    background: #f66257;
    border: 0;
    border-radius: 5px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;

export const CardDescriptionTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 50px;
`;
