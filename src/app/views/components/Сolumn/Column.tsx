import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import _ from 'lodash';

import { ColumnCardContainer, ColumnContainer, TitleInput } from './styles';
import { Card } from '../Card/Card';
import { CreateForm } from '../CreateForm/CreateForm';
import { IColumn } from '../../../shared/interfaces/IColumn';
import { columnCardsSelector } from '../../../state/ducks/card';
import { addCard } from '../../../state/ducks/card/cardSlice';
import { editColumn } from '../../../state/ducks/column/columnSlice';
import { IAppState } from '../../../state/store';

type ColumnProps = {
  column: IColumn;
};

export const Column: React.FC<ColumnProps> = ({ column }) => {
  const [columnTitle, setColumnTitle] = useState<string>(column.title);
  const cards = useSelector(columnCardsSelector(column.status));
  const userName = useSelector((state: IAppState) => state.user.userName);
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
        author: userName,
        comments: [],
        description: '',
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
          placeholder={'Enter card title...'}
          btnName={'Add card'}
        />
        <ColumnCardContainer>
          {_.map(cards, (card) => {
            return <Card key={card.id} card={card} columnTitle={columnTitle} />;
          })}
        </ColumnCardContainer>
      </ColumnContainer>
    </React.Fragment>
  );
};
