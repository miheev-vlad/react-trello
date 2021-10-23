import styled from 'styled-components';

export const CommentLayout = styled.div`
    border: 1px grey solid;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 5px;
    background: #fafafa;
`;

export const DeleteButton = styled.button`
    color: #fff;
    background: #faa19b;
    cursor: pointer;
    padding: 5px;
    width: 30px;
    height: 30px;
    border: 0;

    &:hover {
        background: #f88279;
    }
`;

export const CommentHeader = styled.div`
    display: flex;
    flex-wrapp: wrapp;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

export const CommentText = styled.input`
    width: 100%;
    font-style: italic;
    border: 0;
    background: #fafafa;
    font-size: 12pt;
`;

export const CommentAuthor = styled.p`
    font-size: 10pt;
`