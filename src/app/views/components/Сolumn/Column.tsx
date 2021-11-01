import React, { useRef, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { StatusEnum } from '../../../shared/enums/StatusEnum';
import { ICard } from '../../../shared/interfaces/ICard';
import { IColumn } from '../../../shared/interfaces/IColumn';
import { columnCardsSelector } from '../../../state/ducks/card';
import { addCard, AddCardPayload } from '../../../state/ducks/card/cardSlice';
import { editColumn } from '../../../state/ducks/column/columnSlice';
import { IAppState } from '../../../state/store';
import { Card } from '../Card/Card';
import { Modal } from '../Modal/Modal';
import {
  CardAddButton,
  CardTitleInput,
  ColumnCardContainer,
  ColumnContainer,
  TitleInput,
} from './styles';
import { v4 as uuid } from 'uuid';
import { CreateForm } from '../CreateForm/CreateForm';

interface OwnProps {
  column: IColumn;
}

type Props = OwnProps;

export const Column: React.FC<Props> = ({ column }) => {
  const [columnTitle, setColumnTitle] = useState<string>(column.title);
  const dispatch = useDispatch();
  const editColumnTitleHandler = () => {
    dispatch(
      editColumn({
        id: column.id,
        title: columnTitle,
      }),
    );
  };

  const cards = useSelector(columnCardsSelector(column.status));

  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [card, setCard] = useState<ICard>();
  // const [columnTitle, setColumnTitle] = useState<string>(title);
  // const [isAddBtnDisabled, setIsAddBtnDisabled] = useState<boolean>(true);
  const ref = useRef<HTMLInputElement>(null);

  const [cardTitle, setCardTitle] = useState<string>('');

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

  // const keyPressHandler = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     onAdd!(ref.current!.value, status);
  //     ref.current!.value = '';
  //     setIsAddBtnDisabled(true);
  //   }
  // };

  // const disabledBtnHandler = () => {
  //   if (ref.current!.value.trim() !== '') {
  //     setIsAddBtnDisabled(false);
  //   } else {
  //     setIsAddBtnDisabled(true);
  //   }
  // };

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setColumnTitle(event.target.value);
  // };

  // const keyUpHandler = () => {
  //   onEdit!(id, columnTitle);
  // };

  // const clickHandler = () => {
  //   if (ref.current!.value.trim() !== '') {
  //     onAdd!(ref.current!.value, status);
  //     ref.current!.value = '';
  //     setIsAddBtnDisabled(true);
  //   }
  // };

  // const closeModalHandler = () => {
  //   setShowModal(false);
  // };

  // const showModalHandler = (card: ICard) => {
  //   setShowModal(true);
  //   setCard(card);
  // };

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
            return <Card key={card.id} card={card} />;
          })}
        </ColumnCardContainer>
      </ColumnContainer>
      {/* {showModal && (
        <Modal
          columnTitle={columnTitle}
          onClose={closeModalHandler}
          card={card}
          onRemove={onRemove!}
          onAddComment={onAddComment!}
          onRemoveComment={onRemoveComment!}
          onAddDescription={onAddDescription!}
          onEditCadTitle={onEditCadTitle!}
          onEditComment={onEditComment!}
        />
      )} */}
    </React.Fragment>
  );
};
