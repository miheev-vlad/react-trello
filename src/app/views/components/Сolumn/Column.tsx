import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ICard } from '../../../shared/interfaces/ICard';
import { IColumn } from '../../../shared/interfaces/IColumn';
import { editColumn } from '../../../state/ducks/column/columnSlice';
import { Card } from '../Card/Card';
import { Modal } from '../Modal/Modal';
import {
  CardAddButton,
  CardTitleInput,
  ColumnCardContainer,
  ColumnContainer,
  TitleInput,
} from './styles';

type ColumnProps = {
  column: IColumn;
};

export const Column: React.FC<ColumnProps> = ({ column }) => {
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
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [card, setCard] = useState<ICard>();
  // const [columnTitle, setColumnTitle] = useState<string>(title);
  // const [isAddBtnDisabled, setIsAddBtnDisabled] = useState<boolean>(true);
  // const ref = useRef<HTMLInputElement>(null);

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
        {/* <CardTitleInput
          ref={ref}
          type="text"
          id="title"
          placeholder="Enter Card Title"
          onKeyPress={keyPressHandler}
          onChange={disabledBtnHandler}
        />
        <CardAddButton
          type="button"
          onClick={clickHandler}
          disabled={isAddBtnDisabled}>
          Add Card
        </CardAddButton> */}
        {/* <ColumnCardContainer>
          {cards!
            .filter((card) => card.status === status)
            .map((card) => {
              return (
                <Card
                  key={card.id}
                  card={card}
                  onRemove={onRemove!}
                  showModalHandler={showModalHandler}
                />
              );
            })}
        </ColumnCardContainer> */}
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
