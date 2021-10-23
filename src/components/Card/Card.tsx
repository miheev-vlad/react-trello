import React from 'react';
import { ICard } from '../../shared/interfaces/ICard';
import { CardInfo, CardLayout, DeleteBtn } from './styles';

type CardProps = {
  card: ICard;
  onRemove(id: number): void;
  showModalHandler(card: ICard): void;
};

export const Card: React.FC<CardProps> = ({
  card,
  onRemove,
  showModalHandler,
}) => {
  return (
    <CardLayout>
      <CardInfo onClick={() => showModalHandler(card)}>
        <p>{card.title}</p>
        <small>comments: {card.comments.length}</small>
      </CardInfo>
      <DeleteBtn onClick={() => onRemove!(card.id)}>
        <p>X</p>
      </DeleteBtn>
    </CardLayout>
  );
};
