import React from 'react';
import { useDispatch } from 'react-redux';
import { ICard } from '../../../shared/interfaces/ICard';
import { removeCard } from '../../../state/ducks/card/cardSlice';
import { CardInfo, CardLayout, DeleteBtn } from './styles';

type CardProps = {
  card: ICard;
};

export const Card: React.FC<CardProps> = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <CardLayout>
      <CardInfo onClick={() => {}}>
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
  );
};
