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

    &:hover {
        box-shadow: 4px 2px 2px grey;
    }
`;

export const CardInfo = styled.div`
    width: 90%;
    cursor: pointer;

    &:hover {
        font-weight: 500;
    }
`;

export const DeleteBtn = styled.div`
    width: 10%;
    padding: 5px;
    cursor: pointer;
    color: #fff;
    background: #fcc7c3;
    border: 0;
    border-radius: 5px;

    &:hover {
        background: #f66257;
    }
`;