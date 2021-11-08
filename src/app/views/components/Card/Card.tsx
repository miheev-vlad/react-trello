import React from 'react';
import { useDispatch } from 'react-redux';
import { ICard } from '../../../shared/interfaces/ICard';
import { removeCard } from '../../../state/ducks/card/cardSlice';
import { openModal } from '../../../state/ducks/modal/modalSlice';
import { CardInfo, CardLayout, DeleteBtn } from './styles';

type CardProps = {
  card: ICard;
  columnTitle: string;
};

export const Card: React.FC<CardProps> = ({ card, columnTitle }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <CardLayout>
        <CardInfo
          onClick={() => {
            dispatch(openModal({ isShow: true, card, columnTitle }));
          }}>
          <p>{card.title}</p>
          <small>comments: {card.comments.length}</small>
        </CardInfo>
        <DeleteBtn
          onClick={() => {
            dispatch(removeCard({ id: card.id }));
          }}>
          <p>X</p>
        </DeleteBtn>
      </CardLayout>
    </React.Fragment>
  );
};
