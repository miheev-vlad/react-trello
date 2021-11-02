import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IColumn } from '../../../shared/interfaces/IColumn';
import { columnCardsSelector } from '../../../state/ducks/card';
import { addCard } from '../../../state/ducks/card/cardSlice';
import { editColumn } from '../../../state/ducks/column/columnSlice';
import { Card } from '../Card/Card';
import { ColumnCardContainer, ColumnContainer, TitleInput } from './styles';
import { v4 as uuid } from 'uuid';
import { CreateForm } from '../CreateForm/CreateForm';

interface OwnProps {
  column: IColumn;
}

type Props = OwnProps;

export const Column: React.FC<Props> = ({ column }) => {
  const [columnTitle, setColumnTitle] = useState<string>(column.title);
  const cards = useSelector(columnCardsSelector(column.status));
  const dispatch = useDispatch();

  const editColumnTitleHandler = () => {
    dispatch(
      editColumn({
        id: column.id,
        title: columnTitle,
      }),
    );
  };

  const createCardHandler = (title: string) => {
    dispatch(
      addCard({
        title,
        id: uuid(),
        status: column.status,
        author: 'action.payload.author',
        comments: [],
      }),
    );
  };

  return (
    <React.Fragment>
      <ColumnContainer>
        <TitleInput
          onChange={(e) => setColumnTitle(e.target.value)}
          value={columnTitle}
          type="text"
          id="title"
          placeholder="Enter Todo Name"
          onKeyUpCapture={editColumnTitleHandler}
        />
        <br />
        <CreateForm
          onSubmit={createCardHandler}
          inputName={'title'}
          placeholder={'Enter card title...'}
          btnName={'Add card'}
        />
        <ColumnCardContainer>
          {cards.map((card) => {
            return <Card key={card.id} card={card} columnTitle={columnTitle} />;
          })}
        </ColumnCardContainer>
      </ColumnContainer>
    </React.Fragment>
  );
};
